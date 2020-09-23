import React, { Component } from "react";
import styled from "styled-components";

const SearchPanelBlock = styled.div`
  .search-panel {
    margin: 1rem 0;
  }
  .search-panel .search-input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
}`;

export default class SearchPanel extends Component {
constructor(props) {
  super(props);
  this.state = {
    term: "",
  };
  this.onUpdateSearch = this.onUpdateSearch.bind(this);
}

onUpdateSearch(e) {
  const term = e.target.value.toLowerCase();
  this.setState({ term: term });
  /* this.setState({term}) the same*/
  this.props.onUpdateSearch(term);
}

render() {
  return (
    <SearchPanelBlock>
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search in your posts..."
        onChange={this.onUpdateSearch}
      />
    </SearchPanelBlock>
  );
  }
}
