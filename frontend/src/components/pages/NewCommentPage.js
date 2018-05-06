import React, { Component } from 'react';
import * as API from '../../utils/api';
import * as Actions from '../../actions';
import { connect } from 'react-redux';
import * as UUIDV1 from 'uuid/v1';
import { withRouter } from 'react-router';

class NewCommentPage extends Component {
  
  componentDidMount() {
   	this.props.fetchComments(this.props.id);
  }
  
  render() {
    return (
      <div>
      	<h1>New Comment Page</h1>
      	<div className="container mt-2">
                        <form onSubmit={(e) => {
                            e.preventDefault();
							const id = UUIDV1();
                            API.addComment({id: id,
                                author: this.author.value,
                                body: this.body.value,
                                timestamp: new Date().getTime(),
                              	parentId: this.props.id
                            }).then((comment) => {
								comment.parentId = this.props.id;
                              	this.props.addComment(comment);
                              	this.props.history.push('/');
                                
                            })
                                .catch((e) => {
                                    console.error("Error creating comment: ", e)
                                })
                        }}>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body"
                                          placeholder="Content" rows={3}
                                          
                                          required
                                          ref={(body) => this.body = body}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Author</label>
                                <textarea type="text" className="form-control" id="author"
                                          placeholder="Author" rows={1}
                                          
                                          required
                                          ref={(author) => this.author = author}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Add comment</button>
                        </form>
                    </div>
      	
      </div>
    ) 
  }
}
function mapStateToProps(state) {
  return {
  	comments: state.comments.comments 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(Actions.addComment(comment)),
    fetchComments: (id) => dispatch(Actions.fetchComments(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCommentPage));