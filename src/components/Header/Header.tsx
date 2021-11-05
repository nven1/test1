import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SearchContext } from "../../context/SearchProvider";
import Endpoints from "../../environments/endpoints";
import { Button1 } from "../../styled/styled";
import Logger from "../Logger/Logger";
import SearchContainer from "../SearchContainer/SearchContainer";
import { Container, LeftSection, RightSection } from "./Header.styled";

const Header: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { updateSearch } = useContext(SearchContext);

  return (
    <Container>
      <LeftSection>
        <Link
          to={Endpoints.appEndpoints.posts}
          onClick={() => updateSearch("")}
        >
          <Button1>Home</Button1>
        </Link>
        <Logger render={() => <SearchContainer />} />
      </LeftSection>
      <RightSection>
        <Button1 onClick={() => theme.toggleTheme()}>{theme.mode}</Button1>
      </RightSection>
    </Container>
  );
};

export default Header;
