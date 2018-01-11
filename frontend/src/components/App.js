import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import PostList from './PostList';
import './App.css';

class App extends Component {

  componentDidMount() {
    
    const url = `${process.env.REACT_APP_BACKEND}/posts`;
    
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      		.then( (res) => { return(res.text()) })
      		.then((data) => {
      	
      			const jsonData = JSON.parse(data);
      			
      			this.props.addPost({posts: jsonData});
      			
      		})
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
     	addPost: (data) => dispatch(addPost(data)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
