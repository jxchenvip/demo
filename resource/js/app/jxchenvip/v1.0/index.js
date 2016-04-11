/**
 * @description:      [description]
 * @Author:           jxchen
 * @Email:            jinxiaochen@qianyilc.com
 * @DateTime:         2016-03-23 14:42:34
 * @phpTemplate:      [phpTemplate]
 * @htmlTemplate:     [htmlTemplate]
 * @version:          1.0
 */
define(function(require, exports, module) {
    var Tablet = require('./../common/tablet.js');
    var Mustache = require('../../../units/mustache/2.2.1/mustache.js');
    var indexData = require('./indexData.js'); // 首页数据



    /**********************************************************
    首页Bannner画板
    **********************************************************/
    (function() {
        var tablet = new Tablet('cTablet');
        tablet.drawText = function() {
            var fontsize = 30 * this.width / this.height;
            fontsize = Math.max(Math.min(150, fontsize), 50);
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.font = fontsize + 'px Georgia'
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop("0", "magenta");
            gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = gradient;
            this.ctx.fillText('jxchenvip', this.width / 2, this.height / 2)
        }
        tablet.init();

        function tabletinit() {
            tablet.resetCanvas();
            tablet.drawText();
        }
        window.addEventListener('load', tabletinit);
        window.addEventListener('resize', tabletinit);
    })();


    (function() {
        var temp = document.getElementById('temp').innerHTML;
        var list = document.getElementById('list');
        list.innerHTML = Mustache.to_html(temp, indexData);
    })();
})
