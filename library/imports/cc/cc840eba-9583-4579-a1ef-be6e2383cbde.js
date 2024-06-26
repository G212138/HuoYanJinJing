"use strict";
cc._RF.push(module, 'cc84066lYNFeaHvvm4jg8ve', 'HitTest');
// frame/scripts/Utils/HitTest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTest = void 0;
var HitTest = /** @class */ (function () {
    function HitTest() {
    }
    /**
     * 点是否在图形内
     * @param pos 世界坐标
     * @param rect 碰撞节点
     */
    HitTest.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - (rect.width * rect.scale) / 2, p.y - (rect.height * rect.scale) / 2);
        var rt = cc.v2(p.x + (rect.width * rect.scale) / 2, p.y + (rect.height * rect.scale) / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    /**
     * 图形点击检测, 锚点必须为左上角，或者中心。
     * 所检测的图片不可打包图集
     * @param posw 点击的世界坐标
     * @param sprite 点击的图片
     * @param accurate 是否开始像素精确判定
     */
    HitTest.imgHitTest = function (posw, sprite, accurate) {
        if (accurate === void 0) { accurate = false; }
        if (accurate) {
            var spf = sprite.spriteFrame;
            var pos = sprite.node.convertToNodeSpaceAR(posw);
            if (sprite.node.anchorX == 0 && sprite.node.anchorY == 1) {
                pos.y = -pos.y;
            }
            else if (sprite.node.anchorX == 0.5 && sprite.node.anchorY == 0.5) {
                var w = sprite.node.width;
                var h = sprite.node.height;
                pos.x = w / 2 + pos.x;
                if (pos.y > 0) {
                    pos.y = h / 2 - pos.y;
                }
                else {
                    pos.y = h / 2 + Math.abs(pos.y);
                }
            }
            var tex = spf.getTexture();
            var cvs = document.createElement('canvas');
            var ctx = cvs.getContext('2d');
            cvs.width = tex.width;
            cvs.height = tex.height;
            ctx.drawImage(tex.getHtmlElementObj(), 0, 0, tex.width, tex.height, 0, 0, tex.width / 1, tex.height / 1);
            var ctx = cvs.getContext('2d');
            var data = ctx.getImageData(pos.x, pos.y, 1, 1).data;
            console.log(data);
            return data[3] != 0;
        }
        else {
            this.posInRect(posw, sprite.node);
        }
    };
    /**
     * 点是否在多边形内
     */
    HitTest.polygonInside = function (point, polygon) {
        var b = false;
        var cn = 0;
        for (var i = 0, l = polygon.length - 1; i < l; i++) {
            var p1 = polygon[i];
            var p2 = polygon[i + 1];
            if ((p1.y < point.y && p2.y > point.y) || (p1.y > point.y && p2.y < point.y)) {
                var vt = (point.y - p1.y) / (p2.y - p1.y);
                if (point.x < p1.x + vt * (p2.x - p1.x)) {
                    ++cn;
                }
            }
        }
        // 判断交点个数是奇数还是偶数，奇数在图内，偶数在图外，如果有特殊图形，则需要特殊判断
        b = cn % 2 == 1;
        return b;
    };
    return HitTest;
}());
exports.HitTest = HitTest;

cc._RF.pop();