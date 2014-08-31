Ext.data.JsonP.lz_ace({"tagname":"class","name":"lz.ace","autodetected":{},"files":[{"filename":"classdocs.js","href":"classdocs.html#lz-ace"}],"extends":"lz.view","members":[{"name":"bgcolor","tagname":"cfg","owner":"lz.view","id":"cfg-bgcolor","meta":{}},{"name":"clickable","tagname":"cfg","owner":"lz.view","id":"cfg-clickable","meta":{}},{"name":"clip","tagname":"cfg","owner":"lz.view","id":"cfg-clip","meta":{}},{"name":"height","tagname":"cfg","owner":"lz.view","id":"cfg-height","meta":{}},{"name":"id","tagname":"cfg","owner":"lz.node","id":"cfg-id","meta":{}},{"name":"name","tagname":"cfg","owner":"lz.node","id":"cfg-name","meta":{}},{"name":"pausedelay","tagname":"cfg","owner":"lz.ace","id":"cfg-pausedelay","meta":{}},{"name":"scriptincludes","tagname":"cfg","owner":"lz.node","id":"cfg-scriptincludes","meta":{}},{"name":"text","tagname":"cfg","owner":"lz.ace","id":"cfg-text","meta":{}},{"name":"visible","tagname":"cfg","owner":"lz.view","id":"cfg-visible","meta":{}},{"name":"width","tagname":"cfg","owner":"lz.view","id":"cfg-width","meta":{}},{"name":"x","tagname":"cfg","owner":"lz.view","id":"cfg-x","meta":{}},{"name":"y","tagname":"cfg","owner":"lz.view","id":"cfg-y","meta":{}},{"name":"ignorelayout","tagname":"property","owner":"lz.view","id":"property-ignorelayout","meta":{}},{"name":"inited","tagname":"property","owner":"lz.node","id":"property-inited","meta":{"readonly":true}},{"name":"layouts","tagname":"property","owner":"lz.view","id":"property-layouts","meta":{"readonly":true}},{"name":"subnodes","tagname":"property","owner":"lz.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"subviews","tagname":"property","owner":"lz.view","id":"property-subviews","meta":{"readonly":true}},{"name":"animate","tagname":"method","owner":"lz.view","id":"method-animate","meta":{"chainable":true}},{"name":"destroy","tagname":"method","owner":"lz.node","id":"method-destroy","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"onclick","tagname":"event","owner":"lz.view","id":"event-onclick","meta":{}},{"name":"ondestroy","tagname":"event","owner":"lz.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"lz.node","id":"event-oninit","meta":{}},{"name":"onlayouts","tagname":"event","owner":"lz.view","id":"event-onlayouts","meta":{}},{"name":"onmousedown","tagname":"event","owner":"lz.view","id":"event-onmousedown","meta":{}},{"name":"onmouseout","tagname":"event","owner":"lz.view","id":"event-onmouseout","meta":{}},{"name":"onmouseover","tagname":"event","owner":"lz.view","id":"event-onmouseover","meta":{}},{"name":"onmouseup","tagname":"event","owner":"lz.view","id":"event-onmouseup","meta":{}},{"name":"onpausedelay","tagname":"event","owner":"lz.ace","id":"event-onpausedelay","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"lz.node","id":"event-onsubnodes","meta":{}},{"name":"onsubviews","tagname":"event","owner":"lz.view","id":"event-onsubviews","meta":{}},{"name":"ontext","tagname":"event","owner":"lz.ace","id":"event-ontext","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-lz.ace","classIcon":"icon-class","superclasses":["Module","Eventable","lz.node","lz.view"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/lz.node' rel='lz.node' class='docClass'>lz.node</a><div class='subclass '><a href='#!/api/lz.view' rel='lz.view' class='docClass'>lz.view</a><div class='subclass '><strong>lz.ace</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/classdocs.html#lz-ace' target='_blank'>classdocs.js</a></div></pre><div class='doc-contents'><p>Ace editor component.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bgcolor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-bgcolor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-bgcolor' class='name expandable'>bgcolor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Sets this view's background color</p>\n</div><div class='long'><p>Sets this view's background color</p>\n</div></div></div><div id='cfg-clickable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-clickable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-clickable' class='name expandable'>clickable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view recieves mouse events. ...</div><div class='long'><p>If true, this view recieves mouse events. Automatically set to true when an onclick/mouse* event is registered for this view.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-clip' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-clip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-clip' class='name expandable'>clip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true, this view clips to its bounds ...</div><div class='long'><p>If true, this view clips to its bounds</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-height' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-height' class='name expandable'>height</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's height ...</div><div class='long'><p>This view's height</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='cfg-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='cfg-pausedelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.ace'>lz.ace</span><br/><a href='source/classdocs.html#lz-ace-cfg-pausedelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.ace-cfg-pausedelay' class='name expandable'>pausedelay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Time (msec) after user entry stops to fire onpausedelay event. ...</div><div class='long'><p>Time (msec) after user entry stops to fire onpausedelay event.\n0 will disable this option.</p>\n<p>Defaults to: <code>500</code></p></div></div></div><div id='cfg-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.ace'>lz.ace</span><br/><a href='source/classdocs.html#lz-ace-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.ace-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Initial text for the ace editor. ...</div><div class='long'><p>Initial text for the ace editor.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-visible' class='name expandable'>visible</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If false, this view is invisible ...</div><div class='long'><p>If false, this view is invisible</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-width' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-width' class='name expandable'>width</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's width ...</div><div class='long'><p>This view's width</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-x' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-x' class='name expandable'>x</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's x position ...</div><div class='long'><p>This view's x position</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-y' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-cfg-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-cfg-y' class='name expandable'>y</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>This view's y position ...</div><div class='long'><p>This view's y position</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ignorelayout' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-property-ignorelayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-property-ignorelayout' class='name expandable'>ignorelayout</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, layouts should ignore this view</p>\n</div><div class='long'><p>If true, layouts should ignore this view</p>\n</div></div></div><div id='property-inited' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-layouts' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-property-layouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-property-layouts' class='name expandable'>layouts</a> : <a href=\"#!/api/lz.layout\" rel=\"lz.layout\" class=\"docClass\">lz.layout</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this views's layouts. ...</div><div class='long'><p>An array of this views's layouts. Only defined when needed.</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-subviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-property-subviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-property-subviews' class='name expandable'>subviews</a> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>An array of this views's child views</p>\n</div><div class='long'><p>An array of this views's child views</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-animate' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-method-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-method-animate' class='name expandable'>animate</a>( <span class='pre'>obj</span> ) : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Animates this view's attribute(s) ...</div><div class='long'><p>Animates this view's attribute(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>A hash of attribute names and values to animate to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onclick' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onclick' class='name expandable'>onclick</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this view is clicked ...</div><div class='long'><p>Fired when this view is clicked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-ondestroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onlayouts' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onlayouts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onlayouts' class='name expandable'>onlayouts</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's layouts array has changed ...</div><div class='long'><p>Fired when this views's layouts array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.layout\" rel=\"lz.layout\" class=\"docClass\">lz.layout</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.layout\" rel=\"lz.layout\" class=\"docClass\">lz.layout</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmousedown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onmousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onmousedown' class='name expandable'>onmousedown</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes down on this view ...</div><div class='long'><p>Fired when the mouse goes down on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onmouseout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onmouseout' class='name expandable'>onmouseout</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves off this view ...</div><div class='long'><p>Fired when the mouse moves off this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseover' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onmouseover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onmouseover' class='name expandable'>onmouseover</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse moves over this view ...</div><div class='long'><p>Fired when the mouse moves over this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onmouseup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onmouseup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onmouseup' class='name expandable'>onmouseup</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the mouse goes up on this view ...</div><div class='long'><p>Fired when the mouse goes up on this view</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onpausedelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.ace'>lz.ace</span><br/><a href='source/classdocs.html#lz-ace-event-onpausedelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.ace-event-onpausedelay' class='name expandable'>onpausedelay</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when user entries stops for a period of time. ...</div><div class='long'><p>Fired when user entries stops for a period of time.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.ace\" rel=\"lz.ace\" class=\"docClass\">lz.ace</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.ace\" rel=\"lz.ace\" class=\"docClass\">lz.ace</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubviews' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.view' rel='lz.view' class='defined-in docClass'>lz.view</a><br/><a href='source/layout.html#lz-view-event-onsubviews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.view-event-onsubviews' class='name expandable'>onsubviews</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this views's subviews array has changed ...</div><div class='long'><p>Fired when this views's subviews array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-ontext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.ace'>lz.ace</span><br/><a href='source/classdocs.html#lz-ace-event-ontext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.ace-event-ontext' class='name expandable'>ontext</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the contents of the ace entry changes ...</div><div class='long'><p>Fired when the contents of the ace entry changes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/lz.ace\" rel=\"lz.ace\" class=\"docClass\">lz.ace</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.ace\" rel=\"lz.ace\" class=\"docClass\">lz.ace</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});