import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PostContainer from './components/PostContainer';
import PageNotFound from './components/PageNotFound';

function App() {

  const initPosts = [
    {heading: 'abc', content: '123', id: 1, categories: []},
    {heading: 'def', content: '456', id: 2, categories: []},
    {heading: 'xyz', content: '789', id: 3, categories: []},
  ];

  const initCategories = [
    {text: 'Create New Category'},
    {id: 1, text: 'Politics'},
    {id: 2, text: 'Sports'},
    {id: 3, text: 'Finance'}
  ];

  const [posts, setPosts] = useState(initPosts);
  const [categories, setCategories] = useState(initCategories);

  const addPost = (newPost) => {
    newPost.id = posts.length + 1;
    setPosts([...posts, newPost]);
  }

  const addCategory = (newCategory) => {
    newCategory.id = categories.length;
    setCategories([...categories, newCategory]);
  }

  const editPost = (updatedPost) => {
    const postList = posts.map((post, idx) => {
      if(idx+1 === updatedPost.id) {
        post.heading = updatedPost.heading;
        post.content = updatedPost.content;
        post.categories = updatedPost.categories;
      }
      return post;
    });
    setPosts(postList);
  }

  /*useEffect(() => {
    loadEverything()
  }, [])*/

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <PostContainer {...props} posts={posts}
              categories={categories}
              addCategory={addCategory}
              addPost={addPost}
              editPost={editPost}  />
          )} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  )
}

export default App;
