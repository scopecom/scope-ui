(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@newscron/scope-ui/projects/scope-ui', ['exports', '@angular/core'], factory) :
    (factory((global.newscron = global.newscron || {}, global.newscron['scope-ui'] = global.newscron['scope-ui'] || {}, global.newscron['scope-ui'].projects = global.newscron['scope-ui'].projects || {}, global.newscron['scope-ui'].projects['scope-ui'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScopeUiService = /** @class */ (function () {
        function ScopeUiService() {
        }
        ScopeUiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ScopeUiService.ctorParameters = function () { return []; };
        /** @nocollapse */ ScopeUiService.ngInjectableDef = i0.defineInjectable({ factory: function ScopeUiService_Factory() { return new ScopeUiService(); }, token: ScopeUiService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.ScopeUiService = ScopeUiService;
    exports.ScopeUiComponent = ScopeUiComponent;
    exports.ScopeUiModule = ScopeUiModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=newscron-scope-ui-projects-scope-ui.umd.js.map