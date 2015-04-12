/*
 The MIT License (MIT)

 Copyright ( c ) 2014-2015 Teem2 LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 
Orchestrates the overall process of parsing, instantiating and running a
dreem application.
*/

define(function(require, exports){
  var domRunner = exports
  var dreemParser = require('./dreemParser.js')
  var dreemMaker = require('$DREEM_MAKER')
  var dreemBus = require('./dreemBus.js')

  domRunner.showErrors = function(error) {
    if (error) {
      if (!Array.isArray(error)) error = [error];
      error.forEach(function(err) {
        console.error(err.toString());
      });
      
      // Send all errors to the server so it can open them in the editor
      domRunner.busClient.send({
        type:'error',
        errors:error
      });
    }
  };

  // Browser side usage of Compiler
  domRunner.compile = function(dreemhtml, callback){
    var compiler = new dreemParser.Compiler();

    compiler.onRead = function(file, callback) {
      // The current page is read from the html we pass in
      if (file === location.pathname) return callback(null, dreemhtml, file);

      // If no file extension use the default file extension
      var parts = file.split('/'), lastPart = parts[parts.length - 1];
      if (lastPart.indexOf('.') === -1) file += '.' + define.CLASS_FILE_EXTENSION;

      // load JS via script tag, just cause its cleaner in a browser.
      if (file.indexOf('.js') === file.length - 3) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.onload = function() {
          callback(null, '', file); // just return empty string
        };
        script.onerror = function(e){
          callback(new dreemParser.Error('File not found ' + file));
        };
        script.src = file;
        
        document.head.appendChild(script);
      } else {
        // otherwise we XHR
        var xhr = new XMLHttpRequest();
        xhr.open("GET", file, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status != 200) return callback(new dreemParser.Error('Error loading file ' + file + ' return ' + xhr.status));
            return callback(null, xhr.responseText, file);
          }
        };
        xhr.send();
      }
    };

    compiler.execute(location.pathname, function(error, pkg) {
      if (error) return domRunner.showErrors(error);
      callback(error, pkg);
    });
  };

  // Our always available websocket connection to the server
  domRunner.busClient = new dreemBus.Client(location.href);

  // receive server messages, such as file changes
  domRunner.busClient.onMessage = function(message) {
    if (message.type === 'filechange') {
      location.href = location.href; // reload on filechange
    } else if (message.type === 'close') {
      window.close(); // close the window
    } else if (message.type === 'delay') { // a delay refresh message
      console.log('Got delay refresh from server!');
      setTimeout(function() {
        location.href = location.href;
      }, 1500);
    }
  };

  // Only start processing dreem tags when the document is ready
  document.onreadystatechange = function() {
    if (document.readyState === "complete") {
      // find the first view tag
      var views = document.getElementsByTagName('view');
      if (!views || views.length === 0) return console.log('No views to process!');
      // lets pass our outerHTML to our compiler since we also want the root
      // view to be parsed.
      domRunner.compile(views[0].outerHTML, function(error, pkg) {
        if (!error) {
          console.log(pkg);
          dreemMaker.makeFromPackage(pkg);
        }
      });
    }
  };
})