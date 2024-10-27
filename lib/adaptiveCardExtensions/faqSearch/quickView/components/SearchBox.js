import * as React from "react";
import { SearchBox } from "@fluentui/react"; // Fluent UI SearchBox
import { debounce } from "lodash"; // Import debounce utility
var SearchBar = function (_a) {
    var onSearch = _a.onSearch;
    // Debounce the search function to reduce frequent updates
    var debouncedSearch = React.useCallback(debounce(function (newSearchQuery) {
        onSearch(newSearchQuery);
    }, 300), [onSearch]);
    // Handle search box input changes
    var handleSearchChange = function (event) {
        debouncedSearch(event.target.value);
    };
    return (React.createElement(SearchBox, { placeholder: "Search...", onChange: handleSearchChange, clearButtonProps: { ariaLabel: "Clear search" } }));
};
export default SearchBar;
//# sourceMappingURL=SearchBox.js.map