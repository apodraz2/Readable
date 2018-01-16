import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import PostList from './PostList';
import * as API from '../utils/api';
import './App.css';

class App extends Component {

  componentDidMount() {
    API.fetchPosts().then((posts) => {
      	console.log(posts);
     	this.props.fetchPosts(posts);
      	
    });
    
  }

  render() {
    
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h1>Readable</h1>
        </div>
        
        <div>
          <PostList postList={this.props.posts}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  
	return {
     	 posts: posts
    }
}

function mapDispatchToProps(dispatch) {
 	return {
     	fetchPosts: (data) => dispatch(Actions.fetchPosts(data)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
