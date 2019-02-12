import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScopeUiService {
    constructor() { }
}
ScopeUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ScopeUiService.ctorParameters = () => [];
/** @nocollapse */ ScopeUiService.ngInjectableDef = defineInjectable({ factory: function ScopeUiService_Factory() { return new ScopeUiService(); }, token: ScopeUiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScopeUiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ScopeUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-scope-ui',
                template: `
    <p>
      scope-ui works!
    </p>
  `
            }] }
];
/** @nocollapse */
ScopeUiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScopeUiModule {
}
ScopeUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ScopeUiComponent],
                imports: [],
                exports: [ScopeUiComponent]
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

export { ScopeUiService, ScopeUiComponent, ScopeUiModule };

//# sourceMappingURL=newscron-scope-ui-projects-scope-ui.js.map