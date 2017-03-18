(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['angular-icon'] = global['angular-icon'] || {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate$1([
    _angular_core.HostBinding('attr.role'),
    __metadata("design:type", Object)
], IconComponent.prototype, "role", void 0);
__decorate$1([
    _angular_core.HostBinding('attr.aria-label'),
    __metadata("design:type", String)
], IconComponent.prototype, "ariaLabel", void 0);
__decorate$1([
    _angular_core.HostBinding('class.svg-icon'),
    __metadata("design:type", Object)
], IconComponent.prototype, "iconClassName", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Number)
], IconComponent.prototype, "svgWidth", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Number)
], IconComponent.prototype, "svgHeight", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IconComponent.prototype, "alt", null);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], IconComponent.prototype, "name", null);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], IconComponent.prototype, "size", null);
IconComponent = __decorate$1([
    _angular_core.Component({
        selector: 'svg-icon',
        template: "\n    <svg [attr.width]=\"svgWidth\"\n         [attr.height]=\"svgHeight\">\n      <svg:use [attr.xlink:href]=\"name\"\n               fill=\"currentColor\"></svg:use>\n    </svg>\n  ",
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    })
], IconComponent);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.IconModule = (function () {
    function IconModule() {
    }
    return IconModule;
}());
exports.IconModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            IconComponent
        ],
        exports: [
            IconComponent
        ]
    })
], exports.IconModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
