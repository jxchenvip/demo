webpackJsonp([1],{19:function(e,t,a){var s,i;s=a(53);var o=a(61);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=s},53:function(e,t,a){"use strict";t.default={name:"WebStorage",data:function(){return{}}}},61:function(e,t){e.exports={render:function(){var e=this;return e._m(0)},staticRenderFns:[function(){var e=this;return e._h("div",{staticClass:"api"},[e._h("h2",["WebStorage API"])," ",e._h("div",{staticClass:"api-info"},[e._h("h3",["LocalStorage"])," ",e._h("p",[e._h("strong",["localStorage"]),"—This mechanism works similar to a storage system for a desktop application. The data saved is permanently preserved and always available from the application that created it.\n            "])])," ",e._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",e._h("table",{staticClass:"api-table"},[e._h("tr",[e._h("td",["setItem(key, value)"])," ",e._h("td",["This is the method we have to call to create an item."])])," ",e._h("tr",[e._h("td",["getItem(key)"])," ",e._h("td",["This is the method we have to call to create an item."])])," ",e._h("tr",[e._h("td",["setItem(key, value)"])," ",e._h("td",["To retrieve the value of an item, we must call this method by specifying the keyword of the item we want. The keyword in this case is the same as the keyword declared when the item was created by setItem()."])])," ",e._h("tr",[e._h("td",["removeItem(key)"])," ",e._h("td",["Delete one single item."])])," ",e._h("tr",[e._h("td",["clear()"])," ",e._h("td",["This method will simply empty the storage space."])])," ",e._h("tr",[e._h("td",["key(index)"])," ",e._h("td",["The items are stored sequentially, enumerated with an automatic index that starts from 0. With this method, we can retrieve a specific item or create a loop to retrieve all the information stored. Get the name of a key at a particular index using sessionStorage.key(0)"])])])," ",e._h("pre",{staticClass:"api-code"},["\n\tlocalStorage.setItem('foo', 'bar'); \n\tlocalStorage.setItem('foo2', 'bar2'); \n\tlocalStorage.getItem('foo'); // bar \n\tlocalStorage.removeItem('foo'); \n\tlocalStorage.key(0) // foo2 \n\tlocalStorage.clear(); // clear storage \n        "])," ",e._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",e._h("table",{staticClass:"api-table"},[e._h("tr",[e._h("td",["length"])," ",e._h("td",["Get the number of item(key=>value) stored in local storage."])])])," ",e._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",e._h("table",{staticClass:"api-table"},[e._h("tr",[e._h("td",["length"])," ",e._h("td",["Get the number of item(key=>value) stored in local storage."])])])," ",e._h("pre",{staticClass:"api-code"},["\n\tlocalStorage.length // the number of items, example 3 \n        "])," ",e._h("h4",{staticClass:"api-table-caption"},["The Events"])," ",e._h("table",{staticClass:"api-table"},[e._h("tr",[e._h("td",["storage"])," ",e._h("td",["The storage event is fired when a storage area changes window.addEventListener('storage', onStorage, false);"])])])," ",e._h("div",{staticClass:"api-info"},[e._h("h3",["The Attributes"])])," ",e._h("div",{staticClass:"api-info"},[e._h("h3",["sessionStorage"])," ",e._h("p",[e._h("strong",["sessionStorage"]),"—This is a storage mechanism that will keep data available only for the duration of a page session. The information stored through this mechanism is only accessible from a single window or tab and it lasts until the window is closed."])])," ",e._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",e._h("table",{staticClass:"api-table"},[e._h("tr",[e._h("td",["setItem(key, value)"])," ",e._h("td",["This is the method we have to call to create an item."])])," ",e._h("tr",[e._h("td",["getItem(key)"])," ",e._h("td",["To retrieve the value of an item, we must call this method by specifying the keyword of the item we want. The keyword in this case is the same as the keyword declared when the item was created by setItem()."])])," ",e._h("tr",[e._h("td",["removeItem(key)"])," ",e._h("td",["This method will delete one single item."])])," ",e._h("tr",[e._h("td",["clear()"])," ",e._h("td",["This method will simply empty the storage space."])])," ",e._h("tr",[e._h("td",["key(index)"])," ",e._h("td",["The items are stored sequentially, enumerated with an automatic index that starts from 0. With this method, we can retrieve a specific item or create a loop to retrieve all the information stored. Get the name of a key at a particular index using sessionStorage.key(0)"])])])," ",e._h("pre",{staticClass:"api-code"},["\n\tsessionStorage.setItem('foo', 'bar'); \n\tsessionStorage.setItem('foo2', 'bar2'); \n\tsessionStorage.getItem('foo'); // bar \n\tsessionStorage.removeItem('foo'); \n\tsessionStorage.key(0) // foo2 \n\tsessionStorage.clear(); // clear storage\n\t\t"])," ",e._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",e._h("table",[e._h("tr",[e._h("td",["length"])," ",e._h("td",["the number of items accumulated in the storage space for this application. It works exactly like the length property used regularly in Javascript for arrays, and it is useful for sequential readings. Get the number of key/value pairs stored in local storage with sessionStorage.length"])])])," ",e._h("pre",{staticClass:"api-code"},["\n\tsessionStorage.length // the number of items, example 3 \n\t\t"])," ",e._h("h4",{staticClass:"api-table-caption"},["The Events"])," ",e._h("table",[e._h("tr",[e._h("td",["storage"])," ",e._h("td",["The storage event is fired when a storage area changes"])])])," ",e._h("pre",{staticClass:"api-code"},["\n\twindow.addEventListener('storage', onStorage, false);\n\t\t"])," ",e._h("div",{staticClass:"api-info"},[e._h("h3",["The Attributes"])])])}]}}});
//# sourceMappingURL=1.build.js.map