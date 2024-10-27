var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useEffect, useCallback } from "react";
import { useSPContext } from "./useSPContext";
import "@pnp/sp/webs";
import "@pnp/sp/items";
import "@pnp/sp/lists";
var useListItems = function (context, listName, searchQuery, selectedCategory) {
    var _a = useState(null), items = _a[0], setItems = _a[1]; // Holds all items
    var _b = useState(null), filteredItems = _b[0], setFilteredItems = _b[1]; // Holds filtered items
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var _d = useState(null), error = _d[0], setError = _d[1];
    console.log('Hook rendered...');
    // Fetch all items only once
    var fetchListItems = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var sp, list, filterQuery, listItems, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // setLoading(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    sp = useSPContext(context);
                    list = sp.web.lists.getByTitle(listName);
                    filterQuery = "";
                    if (searchQuery) {
                        filterQuery += "substringof('".concat(searchQuery, "', Title)");
                    }
                    if (selectedCategory) {
                        if (filterQuery)
                            filterQuery += " and "; // Add 'and' if both filters are applied
                        filterQuery += "Category eq '".concat(selectedCategory, "'");
                    }
                    return [4 /*yield*/, list.items.filter(filterQuery)()];
                case 2:
                    listItems = _a.sent();
                    console.log("Fetched filtered list items:", listItems);
                    setItems(listItems); // Store all items
                    setFilteredItems(listItems); // Store filtered items
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error("Error fetching list items:", err_1);
                    setError("Failed to load list items");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [context, listName, searchQuery, selectedCategory]);
    // Fetch items initially
    useEffect(function () {
        fetchListItems();
    }, [fetchListItems]);
    return { items: items, filteredItems: filteredItems, loading: loading, error: error };
};
export default useListItems;
//# sourceMappingURL=useListItems%20copy.js.map