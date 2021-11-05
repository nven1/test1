import { useContext } from "react";
import { PostsContext } from "../../context/PostsProvider";
import { SearchContext } from "../../context/SearchProvider";
import { UsersContext } from "../../context/UsersProvider";
import { UserType } from "../../types/dataTypes";
import Logger from "../Logger/Logger";
import PostList from "../PostList/PostList";

const PostListContainer: React.FC = props => {
  const posts = useContext(PostsContext);
  const users = useContext(UsersContext);
  const { query } = useContext(SearchContext);

  const filterUsers = (query: string) => {
    return users.filter(user => {
      if (user.name.toLowerCase().includes(query)) {
        return true;
      }
      if (user.username.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    });
  };

  const filterPosts = (users: UserType[]) => {
    return posts.filter(post => {
      return users.some(user => user.id === post.userId);
    });
  };

  const queriedPosts = () => {
    const filteredUsers: UserType[] = filterUsers(query);
    return filterPosts(filteredUsers);
  };

  return (
    <Logger
      render={() => (
        <PostList posts={query.length > 2 ? queriedPosts() : posts} />
      )}
    />
  );
};

export default PostListContainer;
