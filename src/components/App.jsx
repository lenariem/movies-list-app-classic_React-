import React, { Component } from "react";
import randomstring from "randomstring";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import AddForm from "./AddForm";

import "../css/App.css";

/* import styled from 'styled-components'
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

inheritance of stiles(will not touch original component AppBlock)
const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`  */

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Hello World", important: false, id: randomstring.generate(5),},
        { label: "Hello Again", important: true, id: randomstring.generate(5) }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id);
      /* const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]; */

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: randomstring.generate(5)
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <AddForm 
          onAdd={this.addItem}/>
      </div>
    );
  }
}
