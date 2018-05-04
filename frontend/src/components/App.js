import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import CategoryPage from './pages/CategoryPage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import ErrorPage from './pages/ErrorPage';
import EditCommentPage from './pages/EditCommentPage';
import NewCommentPage from './pages/NewCommentPage';
import * as API from '../utils/api';
import './App.css';

class App extends Component {

  componentDidMount() {
    API.fetchPosts()
    .then((posts) => {
     	this.props.updatePosts(posts); 
    });
    API.fetchCategories()
    .then((categories) => {
      	this.props.updateCategories(categories);
    });
    
  }

  render() {
    return (
      <div className="App">
      	
      	<Switch>
        	<Route exact path='/' render={() => (
          		<MainPage postList={this.props.posts} categories={this.props.categories}/>
        	)}/>
			<Route exact path="/edit/:id" render={() => (
            	<EditPostPage posts={this.props.posts} categories={this.props.categories} />
        	)}/>
			<Route exact path="/newpost" render={() => (
        		<NewPostPage />                                    
        	)}/>
			<Route exact path="/newcomment/:id" render={(params) => (<NewCommentPage id={params.match.params.id}/>)}/>
			<Route exact path="/editcomment/:id" render={(params) => (<EditCommentPage id={params.match.params.id}/>)}/>
			<Route exact path="/:category" render={(params) => (
                        <CategoryPage posts={this.props.posts} category={params.match}/>
        	)}/>
			<Route exact path="/:category/:id" component={(params) => (
                        <DetailPage postList={this.props.posts} id={params.match.params.id}/>
        	)}/>
			<Route path="/deleted" render={() => (<ErrorPage/>)}/>
			
		
		</Switch>
		
                                                     
      </div>
    );
  }
}

function mapStateToProps({posts, categories}) {
	return {
     	categories: categories.categories,
      	posts: posts.posts
    }
}

export default connect(mapStateToProps, Actions)(App);
