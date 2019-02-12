import { NgModule, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.text = '';
        this.disabled = false;
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'scui-button',
                template: `
    <button class="scui-btn" (click)="onClick.emit($event);" [disabled]="disabled">{{text}}</button>
  `,
                styles: [`
      .scui-btn {
        background-color: #3399FF;
        color: #fff;
        border: 0;
        outline: 0;
        border-radius: 20px;
        padding: 8px 16px;
      }
      .scui-btn:disabled {
        background-color: #b3c3c9;
      }
    `]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    onClick: [{ type: Output }]
};
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [CommonModule],
                exports: [ButtonComponent]
            },] }
];

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