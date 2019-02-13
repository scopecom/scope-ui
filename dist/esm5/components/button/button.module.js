/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export { ButtonComponent };
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.text;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}
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
export { ButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzY29wZWNvbS9zY29wZS11aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUEwQkU7UUFKUyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUc1QyxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGtIQUVUOzZCQUVDLDBRQVlDO2lCQUVKOzs7Ozt1QkFFRSxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsTUFBTTs7SUFRVCxzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBWFksZUFBZTs7O0lBQzFCLCtCQUFtQjs7SUFDbkIsbUNBQTBCOztJQUMxQixrQ0FBNEM7O0FBVzlDO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O0lBRUQsbUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjdWktYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwic2N1aS1idG5cIiAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudCk7XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+e3t0ZXh0fX08L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnNjdWktYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlGRjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG4gICAgICAuc2N1aS1idG46ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNjM2M5O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7XG59XG4iXX0=