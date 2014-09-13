Ext.data.JsonP.Events({"tagname":"class","name":"Events","autodetected":{"members":true},"files":[{"filename":"layout.js","href":"layout.html#Events"}],"private":true,"members":[{"name":"bind","tagname":"method","owner":"Events","id":"method-bind","meta":{"chainable":true}},{"name":"listenTo","tagname":"method","owner":"Events","id":"method-listenTo","meta":{"chainable":true}},{"name":"listenToOnce","tagname":"method","owner":"Events","id":"method-listenToOnce","meta":{"chainable":true}},{"name":"one","tagname":"method","owner":"Events","id":"method-one","meta":{"chainable":true}},{"name":"stopListening","tagname":"method","owner":"Events","id":"method-stopListening","meta":{"chainable":true}},{"name":"trigger","tagname":"method","owner":"Events","id":"method-trigger","meta":{"chainable":true}},{"name":"unbind","tagname":"method","owner":"Events","id":"method-unbind","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Events","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/layout.html#Events' target='_blank'>layout.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>A lightweight event system, used internally.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-bind' class='name expandable'>bind</a>( <span class='pre'>ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Binds an event to the current scope ...</div><div class='long'><p>Binds an event to the current scope</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event is fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-listenTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-listenTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-listenTo' class='name expandable'>listenTo</a>( <span class='pre'>obj, ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Listens for an event on a specific scope ...</div><div class='long'><p>Listens for an event on a specific scope</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>scope to listen for events on</p>\n</div></li><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event is fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-listenToOnce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-listenToOnce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-listenToOnce' class='name expandable'>listenToOnce</a>( <span class='pre'>obj, ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Only listens for an event one time ...</div><div class='long'><p>Only listens for an event one time</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>scope to listen for events on</p>\n</div></li><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event is fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-one' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-one' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-one' class='name expandable'>one</a>( <span class='pre'>ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Binds an event to the current scope, automatically unbinds when the event fires ...</div><div class='long'><p>Binds an event to the current scope, automatically unbinds when the event fires</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event is fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stopListening' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-stopListening' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-stopListening' class='name expandable'>stopListening</a>( <span class='pre'>obj, ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Stops listening for an event on a given scope ...</div><div class='long'><p>Stops listening for an event on a given scope</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>scope to listen for events on</p>\n</div></li><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event would have been fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-trigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>ev</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Fires an event ...</div><div class='long'><p>Fires an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event to fire</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Events'>Events</span><br/><a href='source/layout.html#Events-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Events-method-unbind' class='name expandable'>unbind</a>( <span class='pre'>ev, callback</span> ) : <a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Stops listening for an event on the current scope ...</div><div class='long'><p>Stops listening for an event on the current scope</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ev</span> : String<div class='sub-desc'><p>the name of the event</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>called when the event would have been fired</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Events\" rel=\"Events\" class=\"docClass\">Events</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});