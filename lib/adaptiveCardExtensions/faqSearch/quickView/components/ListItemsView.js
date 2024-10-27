import * as React from "react";
import { useState, useEffect } from "react";
import useListItems from "../../hooks/useListItems";
import ListItem from "./Shared/ListItem";
import { Dropdown } from "@fluentui/react";
import SearchBar from "./Shared/SearchBar";
var ListItemsView = function (_a) {
    var context = _a.context, listName = _a.listName, properties = _a.properties;
    var _b = useState(""), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var _c = useState(""), searchQuery = _c[0], setSearchQuery = _c[1];
    var _d = useState([]), categories = _d[0], setCategories = _d[1];
    // Use useEffect to update categories when properties.collectionData changes
    useEffect(function () {
        if (properties.faqCollectionData && properties.faqCollectionData.length > 0) {
            var newCategories = properties.faqCollectionData.map(function (item) { return ({
                key: item.Key,
                text: item.Category,
            }); });
            // Add "All Categories" as the first option
            newCategories.unshift({ key: "", text: "All Categories" });
            setCategories(newCategories); // Update categories state
        }
    }, [properties.collectionData]);
    // Fetch items based on searchQuery and selected category
    var _e = useListItems(context, listName, searchQuery, // Debounced search query
    selectedCategory), filteredItems = _e.filteredItems, loading = _e.loading, error = _e.error;
    // Handle category change
    var onCategoryChange = function (event, option) {
        if (option) {
            setSelectedCategory(option.key);
        }
    };
    // Handle search query change from SearchComponent
    var handleSearch = function (query) {
        setSearchQuery(query); // Updates search query with debounced input
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "Frequently Asked Questions"),
        React.createElement(SearchBar, { onSearch: handleSearch }),
        React.createElement("br", null),
        React.createElement(Dropdown, { label: properties.faqFilterLabel ? properties.faqFilterLabel : "Filter by Category", options: categories, selectedKey: selectedCategory, onChange: onCategoryChange }),
        React.createElement("br", null),
        loading && React.createElement("p", null, "Loading list items..."),
        error && React.createElement("p", null, error),
        !loading && filteredItems && filteredItems.length === 0 && (React.createElement("p", null, "No results found")),
        filteredItems && (React.createElement(React.Fragment, null, filteredItems.map(function (item) { return (React.createElement(ListItem, { key: item.Id, item: item, listName: listName, context: context })); })))));
};
export default ListItemsView;
//# sourceMappingURL=ListItemsView.js.map