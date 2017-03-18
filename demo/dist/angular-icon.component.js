"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconComponent = (function () {
    function IconComponent() {
        this.role = 'img';
        this.iconClassName = true;
    }
    Object.defineProperty(IconComponent.prototype, "alt", {
        get: function () {
            return this.ariaLabel;
        },
        set: function (value) {
            this.ariaLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (iconName) {
            this._name = "#" + iconName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "size", {
        get: function () {
            return this.svgWidth;
        },
        set: function (size) {
            this.svgWidth = size;
            this.svgHeight = size;
        },
        enumerable: true,
        configurable: true
    });
    return IconComponent;
}());
__decorate([
    core_1.HostBinding('attr.role'),
    __metadata("design:type", Object)
], IconComponent.prototype, "role", void 0);
__decorate([
    core_1.HostBinding('attr.aria-label'),
    __metadata("design:type", String)
], IconComponent.prototype, "ariaLabel", void 0);
__decorate([
    core_1.HostBinding('class.svg-icon'),
    __metadata("design:type", Object)
], IconComponent.prototype, "iconClassName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], IconComponent.prototype, "svgWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], IconComponent.prototype, "svgHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IconComponent.prototype, "alt", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IconComponent.prototype, "name", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], IconComponent.prototype, "size", null);
IconComponent = __decorate([
    core_1.Component({
        selector: 'svg-icon',
        template: "\n    <svg [attr.width]=\"svgWidth\"\n         [attr.height]=\"svgHeight\">\n      <svg:use [attr.xlink:href]=\"name\"\n               fill=\"currentColor\"></svg:use>\n    </svg>\n  ",
        encapsulation: core_1.ViewEncapsulation.None,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], IconComponent);
exports.IconComponent = IconComponent;
//# sourceMappingURL=angular-icon.component.js.map