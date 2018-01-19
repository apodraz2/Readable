import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import * as API from '../utils/api';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
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
        <Route exact path='/' render={() => (
          <MainPage postList={this.props.posts} />
        )}/>
		<Route exact path="/:category/:id" component={(params) => (
                        <DetailPage postList={this.props.posts} id={params.match.params.id}/>
        )}/>
                                                     
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
