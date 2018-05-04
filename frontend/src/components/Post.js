import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Date from '../utils/date.js';
import * as Actions from '../actions/index';
import {withRouter} from 'react-router';

class Post extends Component {
	
  componentDidMount() {
    if(this.props.post){
    	this.props.fetchComments(this.props.post.id);
    } else {
     	this.props.fetchComments(this.props.id); 
    }
  }
  
  render() {
    let post = {};
    if(this.props.post) {
    	post = this.props.post; 
    }
    const deletePost = this.props.deletePost;
    const commentList = this.props.comments;
    let comments = [];
    if(commentList[post.id]){
      comments = commentList[post.id]; 
    }
    
    return (
    	<div>
    		<p>Posted on: {Date.getMonth(post.timestamp)}/{Date.getDay(post.timestamp)}/{Date.getYear(post.timestamp)}</p>
				<a className="postLink" href={`/${post.category}/${post.id}`}>
      				<h3>{post.title}</h3>
				</a>
      		<p>{post.body}</p>
			<h6>Number of Comments: {comments.length}</h6>
      		<h6>Score: {post.voteScore}</h6>
      		<h6>Author: {post.author}</h6>
			<button onClick={ () => {
					this.props.votePost(post.id, true);
					
				}} type="button" className="btn btn-primary btn-sm">Vote Up</button>
      		<button onClick={ () => {
					this.props.votePost(post.id, false);
				
				}} type="button" className="btn btn-primary btn-sm">Vote Down</button>

			<button onClick={ () => {
					deletePost(post.id);
					this.props.history.push('');
				}} type="button" className="btn btn-primary btn-sm">Delete</button>

			<a href={'/edit/' + post.id}> <button type="button" className="btn btn-primary btn-sm">Edit</button></a>
		</div>
	)
  };
}

function mapStateToProps({comments}) {
  return {
    comments: comments.comments
  }
}

export default connect(mapStateToProps, Actions)(withRouter(Post));


