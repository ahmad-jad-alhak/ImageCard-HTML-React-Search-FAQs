import * as React from "react";
import { Dropdown, IDropdownOption } from "@fluentui/react";

interface ICategoryDropdownProps {
  categories: IDropdownOption[];
  selectedCategory: string;
  onCategoryChange: (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => void;
  label?: string; // Optional label
}

// Memoize the CategoryDropdown to avoid re-rendering unnecessarily
const CategoryDropdown: React.FC<ICategoryDropdownProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  label = "Filter by Category",
}) => {
  console.log("CategoryDropdown has rendered....");
  console.log(categories);

  return (
    <Dropdown
      label={label || "Select a Category"} // Default label if label is not provided
      options={[{ key: "", text: "All Categories" }, ...categories]} // Prepend "All Categories"
      selectedKey={selectedCategory || ""} // Set default selected option to "All Categories"
      onChange={onCategoryChange} // UI only, no business logic
    />
  );
};

// Memoize the CategoryDropdown component to prevent unnecessary re-renders
export default React.memo(CategoryDropdown);
