import { useContext } from "react";
import { useHistory } from "react-router";
import { SearchContext } from "../../context/SearchProvider";
import Endpoints from "../../environments/endpoints";
import Logger from "../Logger/Logger";
import Search from "../Search/Search";

const SearchContainer: React.FC = props => {
  const history = useHistory();
  const { updateSearch, query } = useContext(SearchContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    updateSearch(query);
    if (query.length > 2) {
      history.push(Endpoints.appEndpoints.posts);
    }
  };

  return (
    <Logger render={() => <Search query={query} onSearch={handleSearch} />} />
  );
};

export default SearchContainer;
