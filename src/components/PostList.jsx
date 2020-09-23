import React from "react";
import PostListItem from "./PostListItem";
import styled from "styled-components";
import { ListGroup } from "reactstrap";

const PostListBlock = styled.div`
.app-list {
  margin-top: 50px;
}
.app-list .list-group-item {
  padding: 20px 35px 10px 35px;
  margin-top: 10px;
}`;

export default function PostList({posts,onDelete,onToggleImportant,onToggleLiked}) {
const elements = posts.map((item) => {
  const { id, ...itemProps } = item;
  return (
    <li className="list-group-item" key={id}>
      {/* <PostListItem {...itemProps} */}
      <PostListItem
        label={itemProps.label}
        important={itemProps.important}
        like={itemProps.like}
        onDelete={() => onDelete(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleLiked={() => onToggleLiked(id)}
      />
    </li>
  );
});

return (
  <PostListBlock>
    <ListGroup className="app-list">{elements}</ListGroup>
    <p>*to mark as liked click on movie name</p>
  </PostListBlock>
);
}
