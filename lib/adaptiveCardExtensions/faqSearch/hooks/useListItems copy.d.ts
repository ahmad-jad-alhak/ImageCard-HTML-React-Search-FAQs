import { ISPFXContext } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/items";
import "@pnp/sp/lists";
export interface IListItem {
    Id: number;
    Title: string;
    HelpfulCount: number;
    Answer: string;
    Created: any;
    Category: string;
}
interface IUseListItemsResult {
    items: IListItem[] | null;
    filteredItems: IListItem[] | null;
    loading: boolean;
    error: string | null;
}
declare const useListItems: (context: ISPFXContext, listName: string, searchQuery: string, selectedCategory: string) => IUseListItemsResult;
export default useListItems;
//# sourceMappingURL=useListItems%20copy.d.ts.map