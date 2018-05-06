import React, { Component } from 'react';
import * as API from '../../utils/api';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { withRouter } from 'react-router';

class EditCommentPage extends Component {
  state = {
    comment: '' 
  }
  componentDidMount() {
    API.fetchComment(this.props.id)
    .then((comment) => {
    	this.setState({comment: comment});
		this.props.fetchComments(this.state.comment.parentId);
  	});
  }
  
  render() {
    
    return (
      <div>
      	<h1>Edit Comment Page</h1>
    	{(this.state.comment) ? (
                    <div className="container mt-2">
                        <form onSubmit={(e) => {
                            e.preventDefault();

                            API.editComment(this.state.comment.id, {
                                body: this.body.value,
                                timestamp: new Date().getTime()
                            }).then((comment) => {
								this.setState(comment);
                              	comment.parentId = this.state.comment.parentId;
                              	this.props.editComment(comment);
                              	this.props.history.push('/');
                                
                            })
                                .catch((e) => {
                                    console.error("Error editing comment: ", e)
                                })
                        }}>
                            <div className="form-group">
                                <label htmlFor="body">Content</label>
                                <textarea type="text" className="form-control" id="body"
                                          placeholder="Content" rows={3}
                                          defaultValue={this.state.comment.body}
                                          required
                                          ref={(body) => this.body = body}/>
                            </div>
                            <div className="form-group">
                                <span>By {this.state.comment.author}</span>
                            </div>
                            <button type="submit" className="btn btn-primary">Edit comment</button>
                        </form>
                    </div>
) : (<div/>)}
      </div>
      
    
    ) 
  }
}

function mapStateToProps(state) {
 	return {
      
    }
}

function mapDispatchToProps(dispatch) {
 	return {
     	editComment: (comment) => dispatch(Actions.editComment(comment)),
      	fetchComments: (parentId) => dispatch(Actions.fetchComments(parentId))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentPage));