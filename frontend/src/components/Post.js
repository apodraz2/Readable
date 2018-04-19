import React, {Component} from 'react';
import { votePost } from '../utils/api.js'; 
import * as Date from '../utils/date.js';

import * as API from '../utils/api';

class Post extends Component {
  
  
  state = {
   	postScore: '',
    numComments: ''
  }
  
  componentDidMount() {
    this.setState({ postScore: this.props.post.voteScore });
    const postId = this.props.post.id;
    API.fetchComments(postId).then(comments => {
      	this.setState({numComments: comments.length});
  		
  	});
  }
  
  render() {
    let post = this.props.post;
    let score = this.state.postScore;
    const deletePost = this.props.deletePost;
    
    return (
    	<div>
    		<p>Posted on: {Date.getMonth(post.timestamp)}/{Date.getDay(post.timestamp)}/{Date.getYear(post.timestamp)}</p>
				<a className="postLink" href={`/${post.category}/${post.id}`}>
      				<h3>{post.title}</h3>
				</a>
      		<p>{post.body}</p>
			<h6>Number of Comments: {this.state.numComments}</h6>
      		<h6>Score: {score}</h6>
      		<h6>Author: {post.author}</h6>
			<button onClick={ () => {
					votePost(post.id, true);
					
					this.setState({postScore: score + 1});
					
				}} type="button" className="btn btn-primary btn-sm">Vote Up</button>
      		<button onClick={ () => {
					votePost(post.id, true);
					this.setState({postScore: score - 1});
				
				}} type="button" className="btn btn-primary btn-sm">Vote Down</button>

			<button onClick={ () => {
					deletePost(post.id);
				}} type="button" className="btn btn-primary btn-sm">Delete</button>

			<a href={'/edit/' + post.id}> <button type="button" className="btn btn-primary btn-sm">Edit</button></a>
		</div>
	)
  };
}

export default Post;


