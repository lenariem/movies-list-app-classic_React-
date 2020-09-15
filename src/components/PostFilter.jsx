import React, { Component } from 'react'
import "../css/PostFilter.css"

/* 
import { Button } from "reactstrap";
<Button outline color='info'>All</Button>
*/

export default class PostFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const activeButtonStyle = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${activeButtonStyle}`}
                    onClick={() => this.props.onFilterSelect(name)}
                >{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
