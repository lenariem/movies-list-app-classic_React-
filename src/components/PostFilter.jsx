import React from "react";
import "../css/post-status-filter.css"

export default function PostFilter() {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-secondary">Liked</button>
        </div>
    )
}
