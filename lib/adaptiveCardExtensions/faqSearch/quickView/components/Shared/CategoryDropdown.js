var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { Dropdown } from "@fluentui/react";
// Memoize the CategoryDropdown to avoid re-rendering unnecessarily
var CategoryDropdown = function (_a) {
    var categories = _a.categories, selectedCategory = _a.selectedCategory, onCategoryChange = _a.onCategoryChange, _b = _a.label, label = _b === void 0 ? "Filter by Category" : _b;
    console.log("CategoryDropdown has rendered....");
    console.log(categories);
    return (React.createElement(Dropdown, { label: label || "Select a Category", options: __spreadArray([{ key: "", text: "All Categories" }], categories, true), selectedKey: selectedCategory || "", onChange: onCategoryChange }));
};
// Memoize the CategoryDropdown component to prevent unnecessary re-renders
export default React.memo(CategoryDropdown);
//# sourceMappingURL=CategoryDropdown.js.map