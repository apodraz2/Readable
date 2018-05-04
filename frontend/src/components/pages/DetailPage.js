import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import CommentList from '../CommentList';
import Post from '../Post';

class DetailPage extends Component {

  componentDidMount() {
   
   	if(this.props.id) {
    	this.props.fetchComments(this.props.id);
    }
   
  }
  
  render() {
    const commentList = this.props.comments;
    const postList = this.props.postList;
    
    let post = {};
    let comments = [];
    let id = '';
    if(postList) {
      post = postList.filter((post) => post.id === this.props.id)[0]; 
      if(post) {
      	comments = commentList[post.id];
        id = post.id;
      }
    }
   	return  ( 
      <div>
      {post && !post.deleted ? (<div className="container mt-2">
       	<div className="row">
    		<a href='/'><h1 className="title">Readable</h1></a>
      	</div>
      	<Post post={post} />
       	<CommentList commentList={comments} />
      	<a href={`/newcomment/` + id}><button type="button" className="btn btn-primary btn-lg btn-block bottom-button">New Comment</button></a>
      </div>
      ) : (<h1> Error: Post Not Found </h1>)}
           </div>
    );
  }
}

function mapStateToProps(state) {
 	return {
      	comments: state.comments.comments,
      	postList: state.posts.posts
    }
}

export default connect(mapStateToProps, Actions)(DetailPage);