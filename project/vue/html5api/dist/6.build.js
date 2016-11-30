webpackJsonp([6],{14:function(t,e,o){var a,i;a=o(48);var r=o(62);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},48:function(t,e,o){"use strict";e.default={name:"geolocation",data:function(){return{}}}},62:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"api"},[t._h("h2",["Geolocation API"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Geolocation API"])," ",t._h("p",["The Geolocation API allows us to obtain information about the current geographic position of the user. We access the geolocation feature through the global navigator.geolocation property, which returns a Geolocation object."])])," ",t._h("pre",{staticClass:"api-code"},["\n\tnavigator.geolocation; // Geolocation object\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["getCurrentPosition(callback, errorCallback, options) [Returns void]"])," ",t._h("td",["Get the current position. Only the first attribute is required for the method to work properly."])])," ",t._h("tr",[t._h("td",["watchPosition(callback, errorCallback, options) [Returns number]"])," ",t._h("td",["This is similar to the previous method, except that it will start a watch process for the detection of new locations. This method takes the same arguments as the getCurrentPosition method and works in the same way – the difference is that the callback functions will be repeatedly called as the position changes."])])," ",t._h("tr",[t._h("td",["clearWatch(id) [Returns void]"])," ",t._h("td",["cancels the process started by the watchPosition() method. id - the identification returned by watchPosition() when it was called."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tnavigator.geolocation.getCurrentPosition(callbackFunction, errorCallback, options); \n\tvar watchID = navigator.geolocation.watchPosition(callbackFunction, handleError, options); \n\tnavigator.geolocation.clearWatch(watchID);\n\t"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["The callback attribute"])," ",t._h("p",["callback - callback function - object called Position that holds all the information retrieved by the geolocation systems."])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Position object attributes"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["coords"])," ",t._h("td",["Returns the coordinates for the current position (Coordinates object)"])])," ",t._h("tr",[t._h("td",["timestamp"])," ",t._h("td",["This indicates the time when the information was acquired."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tnavigator.geolocation.getCurrentPosition(callbackFunction, errorCallback, options); \n\tfunction callbackFunction(position){ \n\t    //position.coords.latitude; \n\t    //position.coords.longitude; \n\t    //position.coords.accuracy; \n\t    //position.coords.altitudeAccuracy; \n\t}\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["Coordinates object"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["latitude"])," ",t._h("td",["Returns the latitude in decimal degrees number"])])," ",t._h("tr",[t._h("td",["longitude"])," ",t._h("td",["Returns the longitude in decimal degrees number"])])," ",t._h("tr",[t._h("td",["altitude"])," ",t._h("td",["Returns the height in meters number"])])," ",t._h("tr",[t._h("td",["accuracy"])," ",t._h("td",["Returns the accuracy of the coordinates in meters number"])])," ",t._h("tr",[t._h("td",["altitudeAccuracy"])," ",t._h("td",["Returns the accuracy of the altitude in meters number"])])," ",t._h("tr",[t._h("td",["heading"])," ",t._h("td",["Returns the direction of travel in degrees number"])])," ",t._h("tr",[t._h("td",["speed"])," ",t._h("td",["Returns the speed of travel in meters/second number"])])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["The errorCallback attribute"])," ",t._h("p",["errorCallback – is callback function, (PossitionError object)"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The PossitionError object"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["code"])," ",t._h("td",["Returns a code indicating the type of error number"])])," ",t._h("tr",[t._h("td",["message"])," ",t._h("td",["Returns a string that describes the error"])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tnavigator.geolocation.getCurrentPosition(callbackFunction, errorCallback, options); \n\tfunction errorCallback(error){ \n\t    document.innerHTML='Error: '+error.code+' '+error.message; \n\t}\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The PossitionError.code property"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["0"])," ",t._h("td",["When this is returned by PositionError it means than an error not covered by the definition occurs."])])," ",t._h("tr",[t._h("td",["1"])," ",t._h("td",["The user did not grant permission to use the geolocation feature"])])," ",t._h("tr",[t._h("td",["2"])," ",t._h("td",["The position could not be determined"])])," ",t._h("tr",[t._h("td",["3"])," ",t._h("td",["The attempt to request the location timed out"])])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["The options attribute"])," ",t._h("p",["The third possible value of the getCurrentPosition() method is an object containing up to three possible attributes:"])])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["enableHighAccuracy"])," ",t._h("td",["Tells the browser that we would like the best possible result"])])," ",t._h("tr",[t._h("td",["timeout"])," ",t._h("td",["Sets a limit on how many milliseconds a position request can take before a timeout error is reported"])])," ",t._h("tr",[t._h("td",["maximumAge"])," ",t._h("td",["Tells the browser that we are willing to accept a cached location, as long as it is no older than the specified number of milliseconds"])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tvar options = { \n\t   enableHighAccuracy: false, \n\t   timeout: 2000, \n\t   maximumAge: 3000, \n\t} \n\tnavigator.geolocation.getCurrentPosition(callbackFunction, errorCallback, options);\n\t"])])}]}}});
//# sourceMappingURL=6.build.js.map