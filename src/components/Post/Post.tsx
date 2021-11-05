import { Card, CardMain, CardPage, TitleUnderline } from "../../styled/styled";
import { CommentType, PostType } from "../../types/dataTypes";
import {
  CardComments,
  Comment,
  CommentBody,
  CommentHeader,
  CommentsTitle,
} from "./Post.styled";

interface IPost {
  post: PostType;
  comments: CommentType[];
}

const Post: React.FC<IPost> = ({ post, comments, ...props }) => {
  const renderComments = comments.map((c: CommentType) => (
    <Comment key={c.id}>
      <CommentHeader>
        <span>{c.email}</span>
        <span>{c.name}</span>
      </CommentHeader>
      <CommentBody>
        <p>{c.body}</p>
      </CommentBody>
    </Comment>
  ));

  return (
    <CardPage>
      <Card>
        <CardMain>
          <TitleUnderline>{post.title}</TitleUnderline>
          <p>{post.body}</p>
        </CardMain>
        <CardComments>
          <CommentsTitle>Comments</CommentsTitle>
          {renderComments}
        </CardComments>
      </Card>
    </CardPage>
  );
};

export default Post;
