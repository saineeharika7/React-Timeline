import React from 'react'
//import './App.css';
import Post from "./Components/Post/Post"
import Navs from "./Navs"
import Right from "./Right"

function App() {
  return (
    <div className="main">
      <Navs></Navs>
      <Post></Post>
      <Right></Right>
    </div>
  )
}

export default App
