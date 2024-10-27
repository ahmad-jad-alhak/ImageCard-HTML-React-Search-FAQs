// Define the shared categories array or function that returns categories
export var getCategories = function (faqCollectionData) {
    if (!faqCollectionData) {
        return [];
    }
    // Map faqCollectionData to the format used in Dropdown components
    return faqCollectionData.map(function (item) { return ({
        key: item.Key,
        text: item.Category,
    }); });
};
//# sourceMappingURL=categories.js.map