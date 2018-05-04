import React, { Component } from 'react';
import PostForm from '../PostForm';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import * as API from '../../utils/api';
import * as UUIDV1 from 'uuid/v1';
import { withRouter } from 'react-router';

class NewPostPage extends Component {
  onSubmitForm = (data) => {
    API.addPost({
            id: UUIDV1(),
            timestamp: new Date().getTime(),
            title: data.title,
            body: data.body,
            author: data.author,
            category: data.category
        }).then((post) => {
            this.props.createPost(post);
            this.props.history.push(`/${post.category}/${post.id}`)
		});
  }
  
  render() {
   	return (
      <div className="container mt-2">
       	<div className="row">
    		<a href='/'><h1 className="title">Readable</h1></a>
      	</div>
      	<h1>New Post Page</h1>
      	<PostForm categories={this.props.categories} onSubmitForm={this.onSubmitForm}/>
      </div>
    
    ); 
  }
};

function mapStateToProps({categories}) {
  return {
    categories: categories.categories.categories
  }
}

export default withRouter(connect(mapStateToProps, Actions)(NewPostPage));