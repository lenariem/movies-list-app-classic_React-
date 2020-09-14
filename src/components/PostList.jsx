import React from 'react'
import PostListItem from "./PostListItem"
import "../css/post-list.css"


export default function PostList({posts}) {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item
        return (
            <li className="list-group-item" key={id}>
                {/* <PostListItem {...itemProps} */}
                <PostListItem 
                    label={itemProps.label}
                    important={itemProps.important}
                />
            </li>
        )
    })

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    )
}
