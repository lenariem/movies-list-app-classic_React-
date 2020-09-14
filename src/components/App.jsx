import React from 'react'
import randomstring from 'randomstring';

import Header from "./Header"
import SearchPanel from "./SearchPanel"
import PostFilter from "./PostFilter"
import PostList from "./PostList"
import AddForm from "./AddForm"

import "../css/app.css"

/* import styled from 'styled-components'
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

inheritance of stiles(will not touch original component AppBlock)
const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`  */

export default function App() {

  const data = [
    {label: "Hello World", important: false, id: randomstring.generate(5)},
    {label: "Hello Again", important: true, id: randomstring.generate(5)}
  ]

  return (
    <div className="app">
        <Header />
        <div className="search-panel d-flex">
            <SearchPanel />
            <PostFilter />
        </div>
        <PostList posts={data}/>
        <AddForm />
    </div>
  )
}
