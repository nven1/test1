import { ChangeEventHandler } from "react";
import { Input } from "./Search.styled";

interface ISearch {
  onSearch: ChangeEventHandler<HTMLInputElement>;
  query: string;
}

const Search: React.FC<ISearch> = ({ onSearch, query }) => {
  return (
    <div>
      <Input
        type="search"
        onChange={onSearch}
        value={query}
        placeholder="Search users"
      />
    </div>
  );
};

export default Search;
