webpackJsonp([0],{11:function(t,e,a){var i,h;i=a(45);var s=a(56);h=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(h=i=i.default),"function"==typeof h&&(h=h.options),h.render=s.render,h.staticRenderFns=s.staticRenderFns,t.exports=i},45:function(t,e,a){"use strict";e.default={name:"canvas2d",data:function(){return{}}}},55:function(t,e,a){t.exports=a.p+"source.png?0cb2e095990b9c8a7ff839d32f2bdb17"},56:function(t,e,a){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"api"},[t._h("h2",["Canvas2D API"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Canvas2D API"])," ",t._h("p",["Canvas is a part of the new HTML5 specification for next generation web technologies. The HTML5 canvas is an HTML tag that you can embed inside an HTML document for the purpose of drawing graphics with JavaScript. Since the HTML5 canvas is a bitmap, every pixel drawn onto the canvas overrides pixels beneath it."])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["The Canvas tag"])])," ",t._h("pre",{staticClass:"api-code"},['\n    <canvas id="canvas" width="578" height="200"></canvas>\n'])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Context"])," ",t._h("p",["<canvas> creates a fixed size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown. We'll focus on the 2D rendering context."])])," ",t._h("pre",{staticClass:"api-code"},['\nvar canvas = document.getElementById("canvas"); \nvar context = canvas.getContext("2d");\n'])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["save()"])," ",t._h("td",["This method saves the canvas state, including the transformation matrix, styling properties and the clipping mask."])])," ",t._h("tr",[t._h("td",["restore()"])," ",t._h("td",["This method restores the last state saved, including the transformation matrix, styling properties and the clipping mask."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.save(); \ncontext.restore();\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Rectangles"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["fillRect(x, y, width, height)"])," ",t._h("td",["This method will draw a solid rectangle directly to the canvas in the position x,y and the size width,height."])])," ",t._h("tr",[t._h("td",["strokeRect(x, y, width, height)"])," ",t._h("td",["This method will draw an outline rectangle directly to the canvas in the position x,y and the size width,height."])])," ",t._h("tr",[t._h("td",["clearRect(x, y, width, height)"])," ",t._h("td",["This method clears the area in the canvas using a rectangular shape declared by the value of its attributes."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.fillRect(0,0,100,100); \ncontext.clearRect(25,25,60,60); \ncontext.strokeRect(50,50,50,50);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Paths"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["beginPath()"])," ",t._h("td",["This method is required to start a new path."])])," ",t._h("tr",[t._h("td",["closePath()"])," ",t._h("td",["This method can be used at the end of a path to close it. It will generate a straight line from the last position of the pen to the point from which the path started. It’s not necessary to use this method when the path must remain open or it is drawn onto the canvas using fill()."])])," ",t._h("tr",[t._h("td",["rect(x, y, width, height)"])," ",t._h("td",["This method adds a rectangle to the path in the position x,y and with the size width,height."])])," ",t._h("tr",[t._h("td",["stroke()"])," ",t._h("td",["This method is used to draw the path as an outline shape."])])," ",t._h("tr",[t._h("td",["fill()"])," ",t._h("td",["This method is used to draw the path as a solid shape."])])," ",t._h("tr",[t._h("td",["clip()"])," ",t._h("td",["This method is used to create a new clipping area defined by the path. Everything sent to the canvas after this method is declared will be drawn only if it falls inside the shape."])])," ",t._h("tr",[t._h("td",["moveTo(x, y)"])," ",t._h("td",["This method moves the virtual pen to a new position. The next method will continue the path from that point."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.beginPath(); \ncontext.moveTo(75,50); \ncontext.lineTo(100,75); \ncontext.lineTo(45,125); \ncontext.closePath(); \ncontext.stroke(); // or context.fill(); \n\ncontext.rect(10, 10, 80, 90);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Lines"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["lineTo(x, y)"])," ",t._h("td",["This method adds a straight line to the path from the current pen’s position to the point indicated by the attributes x and y."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.beginPath(); \ncontext.moveTo(75,50); \ncontext.lineTo(100,75); \ncontext.lineTo(45,125); \ncontext.closePath();\n"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["lineWidth"])," ",t._h("td",["This property sets the line thickness. By default, the value is 1.0."])])," ",t._h("tr",[t._h("td",["lineCap"])," ",t._h("td",["This property determines the shape of the ending of the lines. There are three possible values: butt (normal ending), round (ending the line with a semicircle) and square (ending the line with a square)."])])," ",t._h("tr",[t._h("td",["lineJoin"])," ",t._h("td",["This property determines the shape of the connection between two lines. It takes three values: round (where the join is rounded), bevel (where the join is cut) and miter (where the join is extended until both lines reach a single point)."])])," ",t._h("tr",[t._h("td",["miterLimit"])," ",t._h("td",["This property takes a number to determine how long the lines will be extended when the lineJoin property is set to miter."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.lineWidth=6; \ncontext.lineCap='round'; \ncontext.lineJoin='miter'; \ncontext.miterLimit=10.0; \n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Arcs"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["arc(x, y, radius, startAngle, endAngle, direction)"])," ",t._h("td",["This method adds an arc to the path. The center of the arc is determined by x and y, the angles are declared in radians and direction is a boolean value for clockwise or anticlockwise direction. To convert degrees into radians, use the formula: Math.PI/180×degrees."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.arc(30, 30, 20, 0, Math.PI, true);  \n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Bezier and quadratic curves"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["quadraticCurveTo(cpx, cpy, x, y)"])," ",t._h("td",["This method adds a quadratic Bézier curve to the path. It starts from the current pen’s position and ends at x,y. The cpx and cpy attributes specify the position of the control point that will shape the curve."])])," ",t._h("tr",[t._h("td",["bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)"])," ",t._h("td",["This method adds a cubic Bézier curve to the path. It starts from the current pen’s position and ends at x,y. The cp1x, cp1y, cp2x, and cp2y attributes specify the position of the two control points that will shape the curve."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.beginPath();\ncontext.moveTo(50,50);\ncontext.quadraticCurveTo(40,40,25,75);\ncontext.quadraticCurveTo(125,25,75,25);\ncontext.stroke();\n\ncontext.beginPath();\ncontext.moveTo(50,50);\ncontext.bezierCurveTo(75,37,70,25,50,25);\ncontext.bezierCurveTo(20,25,20,62.5,20,62.5);\ncontext.stroke();\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Images"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["drawImage()"])," ",t._h("td",["This method will draw an image on the canvas. There are three possible syntaxes."])])," ",t._h("tr",[t._h("td",["drawImage(image, x, y)"])," ",t._h("td",["simple draw"])])," ",t._h("tr",[t._h("td",["drawImage(image, x, y, width, height)"])," ",t._h("td",["draw with scaling"])])," ",t._h("tr",[t._h("td",["drawImage(img, sx, sy, swidth, sheight, x, y, width, height)"])," ",t._h("td",["draw with slicing"])])," ",t._h("tr",[t._h("td",["getImageData(x, y, width, height)"])," ",t._h("td",["This method gets a portion of canvas and saves it as an object. The values of the object are accessible through the properties width, height and data. The first two properties return the size of the portion of the image taken, and data returns the information as an array with values representing the colors of the pixels. This values can be accessed using the formula (width×4×y)+(x×4)."])])," ",t._h("tr",[t._h("td",["putImageData(imagedata, x, y)"])," ",t._h("td",["This method draws the image represented by the information in imagedata onto the canvas."])])," ",t._h("tr",[t._h("td",["createImageData(width, height)"])," ",t._h("td",["This method creates a new image in data format. All the pixels are initially transparent black. It can take image data as an attribute instead of width and height. In this case the new image will have the size determined by the data provided."])])," ",t._h("tr",[t._h("td",["createPattern(image, type)"])," ",t._h("td",["This method creates a pattern from an image that later can be assigned to a shape as a color using the fillStyle property. The possible values for the type attribute are repeat, repeat-x, repeat-y and no-repeat."])])])," ",t._h("pre",{staticClass:"api-code"},["\nvar img = new Image(src); \ncontext.drawImage(img,0,0);\ncontext.drawImage(img,0,0,100,80);\ncontext.drawImage(img,33,71,104,124,21,20,87,104);\n"])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["img"])," ",t._h("td",["Specifies the image, canvas, or video element to use"])])," ",t._h("tr",[t._h("td",["sx"])," ",t._h("td",["Optional. The x coordinate where to start clipping"])])," ",t._h("tr",[t._h("td",["sy"])," ",t._h("td",["Optional. The y coordinate where to start clipping"])])," ",t._h("tr",[t._h("td",["swidth"])," ",t._h("td",["Optional. The width of the clipped image"])])," ",t._h("tr",[t._h("td",["sheight"])," ",t._h("td",["Optional. The height of the clipped image"])])," ",t._h("tr",[t._h("td",["x"])," ",t._h("td",["The x coordinate where to place the image on the canvas"])])," ",t._h("tr",[t._h("td",["y"])," ",t._h("td",["The y coordinate where to place the image on the canvas"])])," ",t._h("tr",[t._h("td",["width"])," ",t._h("td",["Optional. The width of the image to use (stretch or reduce the image)"])])," ",t._h("tr",[t._h("td",["height"])," ",t._h("td",["Optional. The height of the image to use (stretch or reduce the image)"])])])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Colors"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["strokeStyle"])," ",t._h("td",["This property declares the color for the lines of the shapes. It can take any CSS value, including functions such as rgb() and rgba()."])])," ",t._h("tr",[t._h("td",["fillStyle"])," ",t._h("td",["This property declares the color for the interior of solid shapes. It can take any CSS value, including the functions rgb() and rgba(). It’s also used to assign gradients and patterns to shapes (These styles are first assigned to a variable and then the variable is assigned as a color to this property.)."])])," ",t._h("tr",[t._h("td",["globalAlpha"])," ",t._h("td",["This property is used to set the level of transparency for every shape. It takes values from 0.0 (fully opaque) to 1.0 (fully transparent)."])])])," ",t._h("pre",{staticClass:"api-code"},['\ncontext.strokeStyle = "#FFA500"; \ncontext.fillStyle = "#FFA500"; \ncontext.globalAlpha=1;\n'])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Gradients"])])," ",t._h("h4",{staticClass:"api-table-cation"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["createLinearGradient(x1, y1, x2, y2)"])," ",t._h("td",["This method creates a linear gradient to be assigned to a shape as a color using the fillStyle property. Its attributes only specify the start and end positions (relative to the canvas). To declare the colors involved in the gradient, this method must be used in conjunction with addColorStop()."])])," ",t._h("tr",[t._h("td",["createRadialGradient(x1, y1, r1, x2, y2, r2)"])," ",t._h("td",["This method creates a radial gradient to be assigned to a shape as a color using the fillStyle property. The gradient is built from two circles. The attributes only specify the position and radius of the circles (relative to the canvas). To declare the colors involved in the gradient, this method must be used in conjunction with addColorStop()."])])," ",t._h("tr",[t._h("td",["addColorStop(position, color)"])," ",t._h("td",["This method is used to declare the colors for gradients. The attribute position is a value between 0.0 and 1.0, used to determine where the color will start degrading."])])])," ",t._h("pre",{staticClass:"api-code"},["\nvar lingrad = context.createLinearGradient(0,0,0,150); \nlingrad.addColorStop(0, '#00ABEB'); \nlingrad.addColorStop(0.5, '#fff'); \nlingrad.addColorStop(0.5, '#26C000'); \nlingrad.addColorStop(1, '#fff'); \n\nvar radgrad = ctx.createRadialGradient(45,45,10,52,50,30); \nradgrad.addColorStop(0, '#A7D30C'); \nradgrad.addColorStop(0.9, '#019F62'); \nradgrad.addColorStop(1, 'rgba(1,159,98,0)');\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Shadows"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["shadowColor"])," ",t._h("td",["This property sets the color for a shadow. It takes CSS values."])])," ",t._h("tr",[t._h("td",["shadowOffsetX"])," ",t._h("td",["This property declares how many units far the shadow will be from the object in the horizontal direction."])])," ",t._h("tr",[t._h("td",["shadowOffsetY"])," ",t._h("td",["This property declares how many units far the shadow will be from the object in the vertical direction."])])," ",t._h("tr",[t._h("td",["shadowBlur"])," ",t._h("td",["This property takes a number to produce a blurring effect for a shadow."])])])," ",t._h("pre",{staticClass:"api-code"},['\ncontext.shadowOffsetX = 1; \ncontext.shadowOffsetY = 1; \ncontext.shadowBlur = 3; \ncontext.shadowColor = "rgba(255, 0, 0, 0.5)";\n'])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Translating"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["translate(x, y)"])," ",t._h("td",["This method moves the canvas origin to the point x,y. The initial position of the origin (0,0) is the top-left corner of the area generated by the\n                ",t._h("canvas",[" element."])])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.translate(100, 100);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Rotating"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["rotate(angle)"])," ",t._h("td",["This method is used to rotate the canvas over the origin. The angle must be declared in radians. To convert degrees into radians, use the formula: Math.PI/180×degrees."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.rotate(Math.PI*2);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Scaling"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["scale(x, y)"])," ",t._h("td",["This method changes the scale of the canvas. The values by default are (1.0,1.0). The values can be negative."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.scale(0.6,0.6);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Transforms"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Methods"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["transform(m1, m2, m3, m4, dx, dy)"])," ",t._h("td",["This method modifies the transformation matrix of the canvas. The new matrix is calculated over the previous one."])])," ",t._h("tr",[t._h("td",["setTransform(m1, m2, m3, m4, dx, dy)"])," ",t._h("td",["This method modifies the transformation matrix of the canvas. It resets the previous values and declares the new ones."])])])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.transform(1,0.5,-0.5,1,30,10);\ncontext.setTransform(0.866, -0.5, 0.866, 0.5, 0, 0);\n"])," ",t._h("div",{staticClass:"api-info"},[t._h("h3",["Compositing"])])," ",t._h("h4",{staticClass:"api-table-caption"},["The Properties"])," ",t._h("table",{staticClass:"api-table"},[t._h("tr",[t._h("td",["\n                globalCompositeOperation"])," ",t._h("td",["This property defines the composite operation between the source and destination states of the canvas."])])])," ",t._h("div",{staticClass:"api-info"},[t._h("img",{attrs:{src:a(55),height:"418",width:"549"}})])," ",t._h("pre",{staticClass:"api-code"},["\ncontext.globalCompositeOperation='source-over;\n"])])}]}}});
//# sourceMappingURL=0.build.js.map