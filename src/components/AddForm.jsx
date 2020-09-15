import React from 'react'
import "../css/AddForm.css"

export default function AddForm({addItem}) {
    return (
        <div className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="What movie are you going to watch?"
                className="form-control new-post-label"
            />
            <button 
                className="btn-outline-secondary" 
                type="submit"
                onClick={() => addItem('Hello')}>
                Add</button>
        </div>
    )
}
