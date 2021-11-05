import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchProvider";
import postsAPI from "../../data_access/PostDataAccess";
import Endpoints from "../../environments/endpoints";
import { CommentType, PostType, UserType } from "../../types/dataTypes";
import Logger from "../Logger/Logger";
import PostListItem from "../PostListItem/PostListItem";

interface IPostListItemContainer {
  postData: PostType;
}

const PostListItemContainer: React.FC<IPostListItemContainer> = ({
  postData,
}) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [user, setUser] = useState<UserType>();
  const { updateSearch } = useContext(SearchContext);

  useEffect(() => {
    if (postData.id) {
      postsAPI.getComments(Number(postData.id)).then(data => setComments(data));
      postsAPI.getUser(postData.userId).then(data => setUser(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToUserPosts = (e: any) => {
    e.preventDefault();
    if (user) {
      updateSearch(user.username.toLowerCase());
    }
  };

  return user ? (
    <Logger
      render={() => (
        <PostListItem
          commentLength={comments.length}
          onUserClick={goToUserPosts}
          postData={postData}
          username={user?.username}
          postLink={`${Endpoints.appEndpoints.post}/${postData.id}`}
        />
      )}
    />
  ) : null;
};

export default PostListItemContainer;
