"use strict";
(self["webpackJsonp_2ad9aae0-3d78-49ca-b810-6258aa348ceb_0.0.1"] = self["webpackJsonp_2ad9aae0-3d78-49ca-b810-6258aa348ceb_0.0.1"] || []).push([["FaqSearch-property-pane"],{

/***/ 11761:
/*!***********************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/faqSearch/FaqSearchPropertyPane.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqSearchPropertyPane: () => (/* binding */ FaqSearchPropertyPane)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 64723);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pnp_spfx_property_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/spfx-property-controls */ 81902);
/* harmony import */ var FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! FaqSearchAdaptiveCardExtensionStrings */ 44378);
/* harmony import */ var FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__);



var FaqSearchPropertyPane = /** @class */ (function () {
    function FaqSearchPropertyPane(properties) {
        this.properties = properties;
    }
    FaqSearchPropertyPane.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: { description: FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__.PropertyPaneDescription },
                    groups: [
                        {
                            groupName: "Card View Configuration",
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("title", {
                                    label: FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__.TitleFieldLabel,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("heading", {
                                    label: FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__.PrimaryTextFieldLabel,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("quickViewButton", {
                                    label: FaqSearchAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_2__.QuickViewButtonFieldLabel,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("imageUrl", {
                                    label: "Card Image Url",
                                }),
                            ],
                        },
                        {
                            groupName: "FAQs Configuration",
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("siteUrl", {
                                    label: "Site URL",
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("faqListName", {
                                    label: "List Name for FAQs",
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("submitionListName", {
                                    label: "List Name for User's Submissions",
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)("faqFilterLabel", {
                                    label: "Filter by Category Label",
                                }),
                                (0,_pnp_spfx_property_controls__WEBPACK_IMPORTED_MODULE_1__.PropertyFieldCollectionData)("faqCollectionData", {
                                    key: "faqCollectionData",
                                    label: "Configure FAQ Categories",
                                    panelHeader: "Configure FAQ Categories",
                                    manageBtnLabel: "Manage FAQ Categories",
                                    value: this.properties.faqCollectionData,
                                    fields: [
                                        {
                                            id: "Category",
                                            title: "Category (Display Name)",
                                            type: _pnp_spfx_property_controls__WEBPACK_IMPORTED_MODULE_1__.CustomCollectionFieldType.string,
                                            required: true,
                                        },
                                        {
                                            id: "Key",
                                            title: "Key (Internal Name)",
                                            type: _pnp_spfx_property_controls__WEBPACK_IMPORTED_MODULE_1__.CustomCollectionFieldType.string,
                                        },
                                        {
                                            id: "Order",
                                            title: "Order",
                                            type: _pnp_spfx_property_controls__WEBPACK_IMPORTED_MODULE_1__.CustomCollectionFieldType.number,
                                        },
                                    ],
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return FaqSearchPropertyPane;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.FaqSearch-property-pane.js.map