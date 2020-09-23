import React, { Component } from "react";
import randomstring from "randomstring";

import Header from "./Header";
import SearchPanel from "./SearchPanel";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import AddForm from "./AddForm";

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  state = {
      data: [
        { label: "Titanic(Netflix)", important: false, like: false, id: randomstring.generate(5),},
        { label: "Inception (advice from Anna)", important: true, like: false, id: randomstring.generate(5) },
        { label: "Tenet (new,cinema)", important: true, like: false, id: randomstring.generate(5) }
      ],
      term: '',
      filter: 'all'
  };
  

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onAdd = (body) => {
    if(body.length > 0) {
      const newItem = {
        label: body,
        important: true,
        like: false,
        id: randomstring.generate(5)
      }
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      })
    }
  }

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  searchPost = (items, term) => {
    //if empty or user deleted term
    if(term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.label.toLowerCase().includes(term)
    })
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const watched = data.filter(item => !item.important).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)


    return (
      <AppBlock>
        <Header 
          liked={liked}
          watched={watched}
          allPosts={allPosts}
        />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostFilter 
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList 
          posts={visiblePosts} 
          onDelete={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <AddForm 
          onAdd={this.onAdd}
        />
      </AppBlock>
    );
  }
}
