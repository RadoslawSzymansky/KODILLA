import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Post from './components/pages/Post/PostPage';
import AddPost from './components/pages/AddPost/AddPost';
import UpdatePost from './components/pages/UpdatePost/UpdatePost';
import RandomPost from './components/pages/RandomPost/RandomPost';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/posts/new" exact component={AddPost} />
          <Route path="/posts/random" exact component={RandomPost} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/posts/edit/:id" exact component={UpdatePost} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;