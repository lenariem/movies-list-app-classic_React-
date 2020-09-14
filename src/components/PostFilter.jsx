import React from "react";
import { Button } from "reactstrap";
import "../css/post-status-filter.css"

export default function PostFilter() {
    return (
        <div className="btn-group">
            <Button outline color='info'>All</Button>
            <button type="button" className="btn btn-outline-secondary">Liked</button>
        </div>
    )
}
