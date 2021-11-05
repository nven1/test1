import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Container, StyledPaginate } from "./PostList.styled";
import { PostType } from "../../types/dataTypes";
import PostListItemContainer from "../PostListItemContainer/PostListItemContainer";
import { CardPage } from "../../styled/styled";
import Logger from "../Logger/Logger";

interface IPostList {
  posts: PostType[];
}

const NUMBER_PER_PAGE = 8;

const PostList: React.FC<IPostList> = ({ posts, ...props }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [posts]);

  const mappedPosts = posts
    .slice(
      currentPage * NUMBER_PER_PAGE,
      currentPage * NUMBER_PER_PAGE + NUMBER_PER_PAGE
    )
    .map(i => {
      return (
        <Logger
          key={i.id}
          render={() => <PostListItemContainer postData={i} />}
        />
      );
    });

  const handleClick = (event: any) => {
    setCurrentPage(event.selected);
  };

  return (
    <Container>
      <CardPage>{mappedPosts}</CardPage>
      <StyledPaginate>
        <Logger
          overwriteName="ReactPaginate"
          render={() => (
            <ReactPaginate
              forcePage={currentPage}
              breakLabel=""
              marginPagesDisplayed={-1}
              pageCount={posts.length / NUMBER_PER_PAGE}
              pageRangeDisplayed={3}
              previousLabel="<"
              nextLabel=">"
              onPageChange={handleClick}
              containerClassName="Paginate"
              activeLinkClassName="Paginate__activePage"
              nextLinkClassName="Paginate__navigationButton"
              previousLinkClassName="Paginate__navigationButton"
              pageLinkClassName="Paginate__button"
              breakClassName="Paginate__break"
            />
          )}
        />
      </StyledPaginate>
    </Container>
  );
};

export default PostList;
