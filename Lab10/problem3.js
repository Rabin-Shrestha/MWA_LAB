var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by Rabin Shrestha on 7/10/2017.
 */
var baseObject = (function () {
    function baseObject(weidth, length) {
        if (weidth === void 0) { weidth = 0; }
        if (length === void 0) { length = 0; }
        this.weidth = weidth;
        this.length = length;
    }
    return baseObject;
}());
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        var _this = _super.call(this) || this;
        _this.weidth = 5;
        _this.length = 2;
        return _this;
    }
    rectangle.prototype.calcsize = function () {
        return this.length * this.weidth;
    };
    return rectangle;
}(baseObject));

console.log((new rectangle()).calcsize());
