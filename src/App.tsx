import "./App.css";
import PostProvider from "./context/PostsProvider";
import ThemeProvider from "./context/ThemeProvider";
import UsersProvider from "./context/UsersProvider";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Endpoints from "./environments/endpoints";
import { AppContainer } from "./App.styled";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchProvider from "./context/SearchProvider";
import PostListContainer from "./components/PostListContainer/PostListContainer";
import Error404 from "./components/Error404/Error404";
import Header from "./components/Header/Header";
import Logger from "./components/Logger/Logger";

export const isNum = "(\\d+)";

function App() {
  const content = (
    <AppContainer>
      <Logger render={() => <Header />} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
        <Route
          exact
          path={Endpoints.appEndpoints.posts}
          render={() => <Logger render={() => <PostListContainer />} />}
        />
        <Route
          exact
          path={`${Endpoints.appEndpoints.post}/:id${isNum}`}
          render={() => <Logger render={() => <PostContainer />} />}
        />
        <Route render={() => <Logger render={() => <Error404 />} />} />
      </Switch>
    </AppContainer>
  );

  return (
    <BrowserRouter>
      <PostProvider>
        <UsersProvider>
          <SearchProvider>
            <ThemeProvider>{content}</ThemeProvider>
          </SearchProvider>
        </UsersProvider>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
