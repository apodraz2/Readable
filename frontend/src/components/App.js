import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import * as API from '../utils/api';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import CategoryPage from './pages/CategoryPage';
import './App.css';

class App extends Component {

  componentDidMount() {
    API.fetchPosts().then((posts) => {
      	
     	this.props.fetchPosts(posts);
      	
    });
    API.fetchCategories().then((categories) => {
      	
      	console.log(categories);
      	
      	this.props.fetchCategories(categories);
    });
    
  }

  render() {
    
    console.log(this.props);
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <MainPage postList={this.props.posts} categoryList={this.props.categories} />
        )}/>
		<Route exact path="/:category/:id" component={(params) => (
                        <DetailPage postList={this.props.posts} id={params.match.params.id}/>
        )}/>
		<Route exact path="/:category" render={(params) => (
                        <CategoryPage posts={this.props.posts} category={params.match}/>
        )}/>
                                                     
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
