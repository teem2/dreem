Ext.data.JsonP.lz_layout({"tagname":"class","name":"lz.layout","autodetected":{},"files":[{"filename":"layout.js","href":"layout.html#lz-layout"}],"extends":"lz.node","members":[{"name":"id","tagname":"cfg","owner":"lz.node","id":"cfg-id","meta":{}},{"name":"name","tagname":"cfg","owner":"lz.node","id":"cfg-name","meta":{}},{"name":"scriptincludes","tagname":"cfg","owner":"lz.node","id":"cfg-scriptincludes","meta":{}},{"name":"inited","tagname":"property","owner":"lz.node","id":"property-inited","meta":{"readonly":true}},{"name":"locked","tagname":"property","owner":"lz.layout","id":"property-locked","meta":{}},{"name":"subnodes","tagname":"property","owner":"lz.node","id":"property-subnodes","meta":{"readonly":true}},{"name":"destroy","tagname":"method","owner":"lz.node","id":"method-destroy","meta":{}},{"name":"sendEvent","tagname":"method","owner":"Eventable","id":"method-sendEvent","meta":{"chainable":true}},{"name":"setAttribute","tagname":"method","owner":"Eventable","id":"method-setAttribute","meta":{"chainable":true}},{"name":"skip","tagname":"method","owner":"lz.layout","id":"method-skip","meta":{}},{"name":"update","tagname":"method","owner":"lz.layout","id":"method-update","meta":{"abstract":true}},{"name":"ondestroy","tagname":"event","owner":"lz.node","id":"event-ondestroy","meta":{}},{"name":"oninit","tagname":"event","owner":"lz.node","id":"event-oninit","meta":{}},{"name":"onlocked","tagname":"event","owner":"lz.layout","id":"event-onlocked","meta":{}},{"name":"onsubnodes","tagname":"event","owner":"lz.node","id":"event-onsubnodes","meta":{}},{"name":"onsubview","tagname":"event","owner":"lz.layout","id":"event-onsubview","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-lz.layout","short_doc":"The base class for all layouts. ...","classIcon":"icon-class","superclasses":["Module","Eventable","lz.node"],"subclasses":["lz.boundslayout","lz.simplelayout"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Module' rel='Module' class='docClass'>Module</a><div class='subclass '><a href='#!/api/Eventable' rel='Eventable' class='docClass'>Eventable</a><div class='subclass '><a href='#!/api/lz.node' rel='lz.node' class='docClass'>lz.node</a><div class='subclass '><strong>lz.layout</strong></div></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/lz.boundslayout' rel='lz.boundslayout' class='docClass'>lz.boundslayout</a></div><div class='dependency'><a href='#!/api/lz.simplelayout' rel='lz.simplelayout' class='docClass'>lz.simplelayout</a></div><h4>Files</h4><div class='dependency'><a href='source/layout.html#lz-layout' target='_blank'>layout.js</a></div></pre><div class='doc-contents'><p>The base class for all layouts.</p>\n\n<p>When a new layout is added, it will automatically create and add itself to a layouts array in its parent. In addition, an onlayouts event is fired in the parent when the layouts array changes. This allows the parent to access the layout(s) later.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-id' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives this node a global ID, which can be looked up in the global window object. ...</div><div class='long'><p>Gives this node a global ID, which can be looked up in the global window object.\nTake care to not override builtin globals, or override your own instances!</p>\n</div></div></div><div id='cfg-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div><div class='long'><p>Names this node in its parent scope so it can be referred to later.</p>\n</div></div></div><div id='cfg-scriptincludes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-cfg-scriptincludes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-cfg-scriptincludes' class='name expandable'>scriptincludes</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A comma separated list of URLs to javascript includes required as dependencies. ...</div><div class='long'><p>A comma separated list of URLs to javascript includes required as dependencies. Useful if you need to ensure a third party library is available.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-inited' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-inited' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-inited' class='name expandable'>inited</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>True when this node and all its children are completely initialized</p>\n</div><div class='long'><p>True when this node and all its children are completely initialized</p>\n</div></div></div><div id='property-locked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.layout'>lz.layout</span><br/><a href='source/layout.html#lz-layout-property-locked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.layout-property-locked' class='name expandable'>locked</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'><p>If true, this layout will not update</p>\n</div><div class='long'><p>If true, this layout will not update</p>\n</div></div></div><div id='property-subnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-property-subnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-property-subnodes' class='name expandable'>subnodes</a> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a>[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An array of this node's child nodes ...</div><div class='long'><p>An array of this node's child nodes</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this node ...</div><div class='long'><p>Destroys this node</p>\n</div></div></div><div id='method-sendEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-sendEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-sendEvent' class='name expandable'>sendEvent</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sends an event ...</div><div class='long'><p>Sends an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the event to send</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to send with the event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Eventable' rel='Eventable' class='defined-in docClass'>Eventable</a><br/><a href='source/layout.html#Eventable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Eventable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'>name, value</span> ) : <a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute, calls a setter if there is one, then sends an event with the new value ...</div><div class='long'><p>Sets an attribute, calls a setter if there is one, then sends an event with the new value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the attribute to set</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>the value to set to</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Eventable\" rel=\"Eventable\" class=\"docClass\">Eventable</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-skip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.layout'>lz.layout</span><br/><a href='source/layout.html#lz-layout-method-skip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.layout-method-skip' class='name expandable'>skip</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if a layout should be updated or not, usually called from update ...</div><div class='long'><p>Determines if a layout should be updated or not, usually called from update</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>If true, skip updating the layout</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.layout'>lz.layout</span><br/><a href='source/layout.html#lz-layout-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.layout-method-update' class='name expandable'>update</a>( <span class='pre'>value, sender</span> )<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Called when the layout should be updated. ...</div><div class='long'><p>Called when the layout should be updated. Must be implemented to update the position of the subviews</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value received from the node that updated</p>\n</div></li><li><span class='pre'>sender</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The node that updated</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-ondestroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-ondestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-ondestroy' class='name expandable'>ondestroy</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are about to be destroyed ...</div><div class='long'><p>Fired when this node and all its children are about to be destroyed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-oninit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-oninit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-oninit' class='name expandable'>oninit</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node and all its children are completely initialized ...</div><div class='long'><p>Fired when this node and all its children are completely initialized</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onlocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.layout'>lz.layout</span><br/><a href='source/layout.html#lz-layout-event-onlocked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.layout-event-onlocked' class='name expandable'>onlocked</a>( <span class='pre'>locked</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the layout is locked ...</div><div class='long'><p>Fired when the layout is locked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locked</span> : Boolean<div class='sub-desc'><p>If true, the layout is locked</p>\n</div></li></ul></div></div></div><div id='event-onsubnodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/lz.node' rel='lz.node' class='defined-in docClass'>lz.node</a><br/><a href='source/layout.html#lz-node-event-onsubnodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.node-event-onsubnodes' class='name expandable'>onsubnodes</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when this node's subnodes array has changed ...</div><div class='long'><p>Fired when this node's subnodes array has changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a><div class='sub-desc'><p>The <a href=\"#!/api/lz.node\" rel=\"lz.node\" class=\"docClass\">lz.node</a> that fired the event</p>\n</div></li></ul></div></div></div><div id='event-onsubview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='lz.layout'>lz.layout</span><br/><a href='source/layout.html#lz-layout-event-onsubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/lz.layout-event-onsubview' class='name expandable'>onsubview</a>( <span class='pre'>child</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the layout has a new subview. ...</div><div class='long'><p>Fired when the layout has a new subview. Used to listen for events on the view that the layout cares about.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>child</span> : <a href=\"#!/api/lz.view\" rel=\"lz.view\" class=\"docClass\">lz.view</a><div class='sub-desc'><p>The subview that was added</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});