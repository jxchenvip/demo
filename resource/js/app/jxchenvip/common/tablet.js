/**
 * @description:      [description]
 * @Author:           jxchen
 * @Email:            jinxiaochen@qianyilc.com
 * @DateTime:         2016-03-23 14:46:25
 * @phpTemplate:      [phpTemplate]
 * @htmlTemplate:     [htmlTemplate]
 * @version:          1.0
 */
define(function(require, exports, module) {

    function Tablet(wrap, options) {
        this.canvas = (typeof wrap === 'string') ? document.getElementById(wrap) : wrap;
        if (!this.canvas) return false;

        options = options || {};
        this.onnotsupport = options.onnotsupport || function() {}; // 不支持canvas

        if (!this.canvas.getContext) {
            document.body.removeChild(this.canvas);
            this.onnotsupport.call(this);
        }
    }

    /**
     * [rnd 随机数]
     * @param  {[Number]} iMin [最小数]
     * @param  {[Number]} iMax [最大数]
     * @return {[Number]}      [最小数到最大数之间的数]
     */
    Tablet.prototype.rnd = function(iMin, iMax) {
        return Math.floor(Math.random() * iMax) + iMin;
    }

    /**
     * [calcDistance 两点之间的距离]
     * @param  {[Object]} p1 [坐标点1]
     * @param  {[Object]} p2 [坐标点2]
     */
    Tablet.prototype.calcDistance = function(p1, p2) {
        var a = (p1.x - p2.x);
        var b = (p1.y - p2.y);
        return Math.sqrt(a * a + b * b);
    }


    /**
     * [setStageSize 设置canvas大小]
     * @param {[Number]} width  [宽度]
     * @param {[Number]} height [高度]
     */
    Tablet.prototype.setStageSize = function(width, height) {
        this.canvas.width = width || this.width;
        this.canvas.height = height || this.height;
    }


    /**
     * [windowToCanvas 指针在canvas上的坐标]
     * @param  {[Object]} point [指针的坐标]
     * @return {[Object]}       [canvas上的坐标]
     */
    Tablet.prototype.windowToCanvas = function(point) {
        var canvas = this.canvas.getBoundingClientRect();
        return { x: point.x - canvas.left, y: point.y - canvas.top };
    }

    /**
     * [beginStroke 开始绘图]
     * @param  {[Object]} point [指针按下坐标]
     */
    Tablet.prototype.beginStroke = function(point) {
        this._lastLoc = this.windowToCanvas(point)
        this._lastTime = Date.now();
    }

    /**
     * [caclLineWidth 计算linewidth]
     * @param  {[Number]} s [路程]
     * @param  {[Number]} t [时间]
     * @return {[Number]}   [速度]
     */
    Tablet.prototype.caclLineWidth = function(s, t) {
        var v = s / t || 1;
        var lineWidth = 0;
        if (v <= this.minVelocity) {
            lineWidth = this.maxLineWidth;
        } else if (v > this.maxVelocity) {
            lineWidth = this.minLineWidth;
        } else {
            lineWidth = this.maxLineWidth - (v - this.minVelocity) / (10 - this.minVelocity) * (this.maxLineWidth - this.minLineWidth);
        }
        if (this._lastLineWidth == -1) {
            return lineWidth;
        }
        return this._lastLineWidth * (1 - this.ratioLineWidth) + lineWidth * this.ratioLineWidth;
    }

    /**
     * [strokeing 绘图中]
     * @param  {[Object]} point [指针在canvas上的坐标]
     */
    Tablet.prototype.strokeing = function(point) {
        var movePoint = this.windowToCanvas(point);

        var s = this.calcDistance(movePoint, this._lastLoc);
        var t = Date.now() - this._lastTime;
        this.lineWidth = this.caclLineWidth(s, t);
        this.ctx.beginPath();
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(this._lastLoc.x, this._lastLoc.y);
        this.ctx.lineTo(movePoint.x, movePoint.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this._lastTime = Date.now();
        this._lastLoc = movePoint;
        this._lastLineWidth = this.lineWidth;
    }

    Tablet.prototype.resetCanvas = function() {
        this.width = this.canvas.parentNode.offsetWidth;
        this.height = this.canvas.parentNode.offsetHeight;
        this.setStageSize();
    }

    /**
     * [init 画板初始化]
     */
    Tablet.prototype.init = function() {
        var self = this;

        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.parentNode.offsetWidth;
        this.height = this.canvas.parentNode.offsetHeight;
        this.colors = ['red', 'yellow', 'green', 'pink', 'brown', 'purple', 'black'];
        this.lineWidth = this.rnd(1, 20);
        this.strokeStyle = this.colors[this.rnd(0, this.colors.length - 1)];


        this.maxLineWidth = this.rnd(10, 30); // 线条最大宽度
        this.minLineWidth = 1; // 线条最小亮度
        this.maxVelocity = 20; // 最大速度
        this.minVelocity = 0.1; // 最小速度
        this.ratioLineWidth = 0.15; // 0-1

        this._lastLoc = { x: 0, y: 0 }; // 记录上一次坐标
        this._lastTime = Date.now(); // 记录上一次时间
        this._isDown = false;
        this._lastLineWidth = -1;


        this.setStageSize();
        this.canvas.addEventListener('mousedown', function(e) {
            e.preventDefault();
            self._isDown = true;
            self.beginStroke({ x: e.clientX, y: e.clientY });
        })

        this.canvas.addEventListener('mousemove', function(e) {
            if (!self._isDown) return false;
            self.strokeing({ x: e.clientX, y: e.clientY });
        })

        this.canvas.addEventListener('mouseup', function(e) {
            e.preventDefault();
            self._isDown = false;
        })

        this.canvas.addEventListener('mouseout', function(e) {
            e.preventDefault();
            self._isDown = false;
        })


        this.canvas.addEventListener('touchstart', function(e) {
            e.preventDefault();
            self._isDown = true;
            self.beginStroke({ x: e.touches[0].pageX, y: e.touches[0].pageY - document.body.scrollTop });
        })

        this.canvas.addEventListener('touchmove', function(e) {
            if (!self._isDown) return false;
            self.strokeing({ x: e.touches[0].pageX, y: e.touches[0].pageY - document.body.scrollTop });
        })

        this.canvas.addEventListener('touchend', function(e) {
            e.preventDefault();
            self._isDown = false;
        })
    };
    module.exports = Tablet;
})
