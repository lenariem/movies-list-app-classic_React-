import React from "react";

import PostListItem from "./PostListItem";
import { ListGroup } from "reactstrap";
import "../css/PostList.css";

export default function PostList({ posts, onDelete, onToggleImportant, onToggleLiked }) {
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
        <div>
        <ListGroup className="app-list">{elements}</ListGroup>
        </div>
    );
}
