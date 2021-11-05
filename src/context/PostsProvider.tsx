import React, { createContext, useEffect, useState } from "react";
import postsAPI from "../data_access/PostDataAccess";
import { PostType } from "../types/dataTypes";

export const PostsContext = createContext<PostType[]>([]);

const PostProvider: React.FC = props => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    postsAPI.getPosts().then(data => setPosts(data));
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostProvider;
