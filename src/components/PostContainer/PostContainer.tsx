import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../context/PostsProvider";
import useNumParams from "../../hooks/useNumParams";
import { CommentType, PostType } from "../../types/dataTypes";
import Post from "../Post/Post";
import postsAPI from "../../data_access/PostDataAccess";
import Logger from "../Logger/Logger";

// import { CommentType, PostType } from "../../types/dataTypes";

const PostContainer: React.FC = props => {
  const id = useNumParams();
  const posts = useContext(PostsContext);

  const [post, setPost] = useState<PostType>();
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    if (id) {
      const filteredPost = posts.filter(p => p.id === id)[0];
      setPost(filteredPost);
      postsAPI.getComments(id).then(data => setComments(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return post ? (
    <Logger render={() => <Post post={post} comments={comments} />} />
  ) : null;
};

export default PostContainer;
