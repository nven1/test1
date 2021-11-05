import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SearchContext } from "../../context/SearchProvider";
import Endpoints from "../../environments/endpoints";
import { Button1 } from "../../styled/styled";
import Logger from "../Logger/Logger";
import SearchContainer from "../SearchContainer/SearchContainer";
import { Container } from "./Header.styled";

const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { updateSearch } = useContext(SearchContext);

  return (
    <Container>
      <Link to={Endpoints.appEndpoints.posts} onClick={() => updateSearch("")}>
        <Button1>Home</Button1>
      </Link>
      <Logger render={() => <SearchContainer />} />
      <Button1 onClick={() => theme.toggleTheme()}>{theme.mode}</Button1>
    </Container>
  );
};

export default Header;
