import React, {Component} from 'react'
import "../css/AddForm.css"

export default class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
    }
    
    render(){
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    placeholder="What movie are you going to watch?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                />
                <button 
                    className="btn-outline-secondary" 
                    type="submit">
                    Add
                </button>
            </form>
        )
    }
}
    

