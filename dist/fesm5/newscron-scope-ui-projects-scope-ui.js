import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScopeUiService = /** @class */ (function () {
    function ScopeUiService() {
    }
    ScopeUiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ScopeUiService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScopeUiService.ngInjectableDef = defineInjectable({ factory: function ScopeUiService_Factory() { return new ScopeUiService(); }, token: ScopeUiService, providedIn: "root" });
    return ScopeUiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScopeUiComponent = /** @class */ (function () {
    function ScopeUiComponent() {
    }
    /**
     * @return {?}
     */
    ScopeUiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ScopeUiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-scope-ui',
                    template: "\n    <p>\n      scope-ui works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ScopeUiComponent.ctorParameters = function () { return []; };
    return ScopeUiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScopeUiModule = /** @class */ (function () {
    function ScopeUiModule() {
    }
    ScopeUiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ScopeUiComponent],
                    imports: [],
                    exports: [ScopeUiComponent]
                },] }
    ];
    return ScopeUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ScopeUiService, ScopeUiComponent, ScopeUiModule };

//# sourceMappingURL=newscron-scope-ui-projects-scope-ui.js.map