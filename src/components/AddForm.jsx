import React, { Component } from "react";
import styled from "styled-components";

const FormBlock = styled.div`
  .bottom-panel {
    margin-top: 20px;
  }
  .bottom-panel .new-post-label {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }`;

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <FormBlock>
        <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="What movie are you going to watch?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={this.state.text}
          />
          <button className="btn-outline-secondary" type="submit">
            Add
          </button>
        </form>
      </FormBlock>
    );
  }
}