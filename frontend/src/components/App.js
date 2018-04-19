import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import * as API from '../utils/api';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import CategoryPage from './pages/CategoryPage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import './App.css';

class App extends Component {

  	getPosts = () => {
  		API.fetchPosts().then((posts) => {
      	
     		this.props.fetchPosts(posts);
      	
    	});
  	};

	deletePost = (postId) => {
  		API.deletePost(postId)
    		.then(() => {
          	let tempPosts = this.props.posts.posts.map((post) => {
              	if(post.id === postId){
              		post.deleted = true;
                  	return post;
              	}
              	return post;
            });
          	this.props.fetchPosts(tempPosts);
      	
    	});
    
  	};

  componentDidMount() {
    this.getPosts();
    API.fetchCategories().then((categories) => {
      	
      	this.props.fetchCategories(categories);
    });
    
  }

  render() {
    return (
      <div className="App">
      	<Switch>
        	<Route exact path='/' render={() => (
          		<MainPage postList={this.props.posts} categoryList={this.props.categories} deletePost={this.deletePost} />
        	)}/>
			<Route exact path="/edit/:id" render={() => (
            	<EditPostPage posts={this.props.posts} categories={this.props.categories} />
        	)}/>
			<Route exact path="/newpost" render={() => (
        		<NewPostPage />                                    
        	)}/>
			<Route exact path="/:category" render={(params) => (
                        <CategoryPage posts={this.props.posts} category={params.match}/>
        	)}/>
			<Route exact path="/:category/:id" component={(params) => (
                        <DetailPage postList={this.props.posts} id={params.match.params.id}/>
        	)}/>
		
		</Switch>
		
                                                     
      </div>
    );
  }
}

function mapStateToProps({posts, categories}) {
  
	return {
     	posts: posts,
      	categories: categories
    }
}

function mapDispatchToProps(dispatch) {
 	return {
     	fetchPosts: (data) => dispatch(Actions.fetchPosts(data)),
      	fetchCategories: (data) => dispatch(Actions.fetchCategories(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
