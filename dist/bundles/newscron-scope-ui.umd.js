(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@newscron/scope-ui', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.newscron = global.newscron || {}, global.newscron['scope-ui'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.text = '';
            this.disabled = false;
            this.onClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'scui-button',
                        template: "\n    <button class=\"scui-btn\" (click)=\"onClick.emit($event);\" [disabled]=\"disabled\">{{text}}</button>\n  ",
                        styles: ["\n      .scui-btn {\n        background-color: #3399FF;\n        color: #fff;\n        border: 0;\n        outline: 0;\n        border-radius: 20px;\n        padding: 8px 16px;\n      }\n      .scui-btn:disabled {\n        background-color: #b3c3c9;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            text: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            onClick: [{ type: core.Output }]
        };
        return ButtonComponent;
    }());
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonComponent],
                        imports: [common.CommonModule],
                        exports: [ButtonComponent]
                    },] }
        ];
        return ButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=newscron-scope-ui.umd.js.map