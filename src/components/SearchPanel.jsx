import React, { Component } from 'react'
import "../css/SearchPanel.css"

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state ={
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term: term})
        /* this.setState({term}) the same*/ 
        this.props.onUpdateSearch(term); 
    }

    render() {
        return (
            <div>
                <input 
                    className="form-control search-input"
                    type="text"
                    placeholder="Search in your posts..."
                    onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}
