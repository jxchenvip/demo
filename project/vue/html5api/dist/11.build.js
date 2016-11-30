webpackJsonp([11],{43:function(t,e,a){"use strict";e.default={name:"audio",data:function(){return{}}}},65:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"api"},[t._h("h2",["Audio API"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Audio API"])," ",t._h("p",[t._h("strong",["Audio API"])," - specification describes a high-level JavaScript API for processing and synthesizing audio in web applications."])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",['The "audio" tag'])])," ",t._h("pre",{staticClass:"api-code"},['\n\t<audio id="audio" controls preload><source src="audio.mp3" /><source src="audio.ogg" /></audio> // the audio tag \n\t'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["play()"])," ",t._h("td",["This method will play or resume the media file."])])," ",t._h("tr",[t._h("td",["pause()"])," ",t._h("td",["This method will pause playback."])])," ",t._h("tr",[t._h("td",["load()"])," ",t._h("td",["This method loads the media file for dynamic applications."])])," ",t._h("tr",[t._h("td",["canPlayType(type)"])," ",t._h("td",["This method will indicate whether a file format is supported by the browser or not. It returns an empty string if the browser can’t play the media, and the strings “maybe” or “probably” based on how confident it is that it can be played."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tvar audio = new Audio(\"audio.mp3\"); // or var audio = new Audio(); \n\taudio.setAttribute(\"src\", \"audio.mp3\");\n\n\tvar play = document.getElementById('play');\n\tplay.addEventListener('click', function(){ \n\t   audio.play();\n\t}, false);\n\n\tvar pause = document.getElementById('pause');\n\tpause.addEventListener('click', function(){ \n\t   audio.pause();\n\t}, false);\n\n\taudio.volume = value; // value is float \n\taudio.canPlayType('audio/mp3');\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["paused"])," ",t._h("td",["It returns true if the media is currently paused or it hasn’t started playing."])])," ",t._h("tr",[t._h("td",["ended"])," ",t._h("td",["It returns true if the media has reached the end."])])," ",t._h("tr",[t._h("td",["duration"])," ",t._h("td",["It returns the duration of the media in seconds."])])," ",t._h("tr",[t._h("td",["currentTime"])," ",t._h("td",["This is a property that can return and receive a value to inform the position in which the media is being played or sets a new position to start playing."])])," ",t._h("tr",[t._h("td",["error"])," ",t._h("td",["This returns the error value if an error has occurred."])])," ",t._h("tr",[t._h("td",["buffered"])," ",t._h("td",["This offers information about how much the file has loaded so far into the buffer. It returns an array containing data about every portion of the media that has been downloaded."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\taudio.currentTime = 0; \n\tif(audio.ended){\n\t     // the media file has finished playing \n\t}\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Events"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["progress"])," ",t._h("td",["This event is fired periodically to inform of the progress downloading the media."])])," ",t._h("tr",[t._h("td",["canplaythrough"])," ",t._h("td",["This event is fired when the entire media can be played without interruption."])])," ",t._h("tr",[t._h("td",["canplay"])," ",t._h("td",["This event is fired when the media can be played. Unlike the previous, it’s fired when there are just a couple of frames available."])])," ",t._h("tr",[t._h("td",["ended"])," ",t._h("td",["This event is fired when the media reaches the end."])])," ",t._h("tr",[t._h("td",["pause"])," ",t._h("td",["This event is fired when the playback is paused."])])," ",t._h("tr",[t._h("td",["play"])," ",t._h("td",["This event is fired when the media starts playing."])])," ",t._h("tr",[t._h("td",["error"])," ",t._h("td",["This event is fired when an error occurs. The event is delivered to the element, if present, corresponding to the media source that produces the error."])])])," ",t._h("pre",{staticClass:"api-code"},["\n\tvar audio = new Audio(\"audio.mp3\"); \n\taudio.addEventListener('play', onPlay, false);\n\taudio.addEventListener('ended', onEnded, false);\n\taudio.addEventListener('progress', onProgress, false);\n\t"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Attributes"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["src"])," ",t._h("td",["the path of the file to be played."])])," ",t._h("tr",[t._h("td",["controls"])," ",t._h("td",["This activates the interface provided by default for every browser."])])," ",t._h("tr",[t._h("td",["autoplay"])," ",t._h("td",["When this attribute is present, the browser will automatically play the audio as soon as it can."])])," ",t._h("tr",[t._h("td",["loop"])," ",t._h("td",["If this attribute is specified, the browser will restart the audio upon reaching the end."])])," ",t._h("tr",[t._h("td",["preload"])," ",t._h("td",["This attribute can take three values: none, metadata or auto. The first one indicates that the audio shouldn’t be cached, usually with the goal of minimizing unnecessary traffic. The second value, metadata, will recommend the browser to fetch some information about the resource (for example, duration). The third value, auto, is the value set by default and it prompts the browser to download the file as soon as possible."])])])])}]}},9:function(t,e,a){var i,r;i=a(43);var s=a(65);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i}});
//# sourceMappingURL=11.build.js.map