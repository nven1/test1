import React, { createContext, useState } from "react";
import { SearchType } from "../types/dataTypes";

const defaultSearch: SearchType = {
  query: "",
  updateSearch: (query: string) => {},
};

export const SearchContext = createContext<SearchType>(defaultSearch);

const SearchProvider: React.FC = props => {
  const updateSearch = (query: string) => {
    setSearchState({ ...searchState, query });
  };

  const initSearch: SearchType = {
    query: "",
    updateSearch: updateSearch,
  };

  const [searchState, setSearchState] = useState<SearchType>(initSearch);

  return (
    <SearchContext.Provider value={searchState}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
