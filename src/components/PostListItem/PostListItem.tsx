import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import {
  Button1,
  Card,
  CardMain,
  CardSecondary,
  TitleUnderline,
} from "../../styled/styled";
import { PostType } from "../../types/dataTypes";
import { Comments } from "./PostListItem.styled";

interface IPostListItem {
  commentLength: number;
  username: string;
  postData: PostType;
  onUserClick: MouseEventHandler<HTMLButtonElement>;
  postLink: string;
}

const PostListItem: React.FC<IPostListItem> = ({
  onUserClick,
  commentLength,
  username,
  postData,
  postLink,
}) => {
  return (
    <Card>
      <CardMain>
        <Link to={postLink} target="_blank">
          <TitleUnderline>{postData.title}</TitleUnderline>
        </Link>
        <p>{postData.body}</p>
      </CardMain>
      <CardSecondary>
        <Comments to={postLink} target="_blank">
          Comments: {commentLength}
        </Comments>
        <Button1 onClick={onUserClick}>{username}</Button1>
      </CardSecondary>
    </Card>
  );
};

export default PostListItem;
