import { NgModule, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.text = '';
        this.disabled = false;
        this.onClick = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'scui-button',
                    template: "\n    <button class=\"scui-btn\" (click)=\"onClick.emit($event);\" [disabled]=\"disabled\">{{text}}</button>\n  ",
                    styles: ["\n      .scui-btn {\n        background-color: #3399FF;\n        color: #fff;\n        border: 0;\n        outline: 0;\n        border-radius: 20px;\n        padding: 8px 16px;\n      }\n      .scui-btn:disabled {\n        background-color: #b3c3c9;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        text: [{ type: Input }],
        disabled: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return ButtonComponent;
}());
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [CommonModule],
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

export { ButtonComponent, ButtonModule };

//# sourceMappingURL=newscron-scope-ui.js.map