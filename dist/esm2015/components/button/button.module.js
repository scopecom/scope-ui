/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ButtonComponent {
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
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.text;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}
export class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [CommonModule],
                exports: [ButtonComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZXdzY3Jvbi9zY29wZS11aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1Qi9FLE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBSlMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFHNUMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7O0dBRVQ7eUJBRUM7Ozs7Ozs7Ozs7OztLQVlDO2FBRUo7Ozs7O21CQUVFLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxNQUFNOzs7O0lBRlAsK0JBQW1COztJQUNuQixtQ0FBMEI7O0lBQzFCLGtDQUE0Qzs7QUFnQjlDLE1BQU0sT0FBTyxZQUFZOzs7WUFMeEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2N1aS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJzY3VpLWJ0blwiIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KTtcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj57e3RleHR9fTwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuc2N1aS1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OUZGO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIH1cbiAgICAgIC5zY3VpLWJ0bjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2MzYzk7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0J1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTW9kdWxlIHtcbn1cbiJdfQ==