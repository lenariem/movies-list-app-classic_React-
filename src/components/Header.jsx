import React from "react";
import styled from "styled-components";

const AppHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
      font-size: 26px;
      color: ${(props) => (props.colored ? "black" : "red")};
      :hover {
      color: blue;
      }
  }
  h2 {
      font-size: 1.2rem;
      color: grey;
}`;

export default function Header({ liked, watched, allPosts }) {
  return (
    /*  <AppHeader as='a'  will change header to a tag*/
    <AppHeader colored>
      <h1>List of User's movies</h1>
      <h2>
          {allPosts} posts, watched {watched}, liked {liked}
      </h2>
    </AppHeader>
  );
}
