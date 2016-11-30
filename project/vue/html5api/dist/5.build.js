webpackJsonp([5],{15:function(t,e,s){var i,n;i=s(49);var a=s(56);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},49:function(t,e,s){"use strict";e.default={name:"history",data:function(){return{}}}},56:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"api"},[t._h("h2",["History API"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["History API"])," ",t._h("p",["The History API lets us manipulate session history in the browser to keep track of the user’s activity. This API is included in the official specification as the History interface.\n            "])])," ",t._h("pre",{staticClass:"api-code"},["\n\twindow.history; // History object\n        "])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["go(n)"])," ",t._h("td",["We goes back or forward on the number ('n') of steps in the session history. If the 'n' is zero then will reload the current page. If the 'n' is out of range, does nothing."])])," ",t._h("tr",[t._h("td",["back()"])," ",t._h("td",["Goes back one step. If there is no previous page, does nothing."])])," ",t._h("tr",[t._h("td",["forward()"])," ",t._h("td",["Goes forward one step. If there is no next page, does nothing."])])," ",t._h("tr",[t._h("td",["pushState(data, title [, url ]) "])," ",t._h("td",["This method creates a new entry in the session history. Pushes the given data onto the session history, with the given title, and, if provided, the given URL."])])," ",t._h("tr",[t._h("td",["replaceState(data, title [, url ])"])," ",t._h("td",["This method works exactly like pushState(), but it doesn’t generate a new entry. Instead, it replaces the information for the current one."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\twindow.history.go(-1); // or window.history.back(); \n\twindow.history.forward(); \n\twindow.history pushState(2, ‘Title’, 'history.html'); \n\twindow.history.replaceState({foo: 'bat'}, 'New Title');\n        "])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["length"])," ",t._h("td",["Returns the total number of entries in the history list."])])," ",t._h("tr",[t._h("td",["state"])," ",t._h("td",["Returns the state for the current URL."])])])," ",t._h("pre",{staticClass:"api-code"},["\n    var n=window.history.length // example 4\n        "])," ",t._h("h4",{staticClass:"api-table-caption"},["The Events"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["popstate"])," ",t._h("td",["This event is fired in certain circumstances to inform the current state."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\twindow.addEventListener('popstate', function(e){ \n\t    // function() \n\t}, false);\n        "])])}]}}});
//# sourceMappingURL=5.build.js.map