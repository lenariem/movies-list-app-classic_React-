import React from 'react'
import "../css/search-panel.css"

export default function SearchPanel() {
    return (
        <div>
            <input 
            className="form-control search-input"
            type="text"
            placeholder="Search in your posts..."/>
        </div>
    )
}
