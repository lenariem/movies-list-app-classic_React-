import React from 'react'
import "../css/post-add-form.css"

export default function AddForm() {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="What movie are you going to watch?"
                className="form-control new-post-label"
            />
            <button 
                className="btn-outline-secondary" 
                type="submit">
                Add</button>
        </form>
    )
}
