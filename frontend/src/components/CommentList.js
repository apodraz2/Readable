import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import * as Constants from '../utils/constants';

class CommentList extends Component {
  state = {
  	sortMode: Constants.SORT_BY_SCORE
  }
  
  render() {
    const sortMode = this.state.sortMode;
    return (
    	<div>
         	<button type="button" onClick={() => this.setState({sortMode: Constants.SORT_BY_SCORE})}>Sort by score</button>
			<button type="button" onClick={() => this.setState({sortMode: Constants.SORT_BY_NEWEST})}>Sort by date</button>
    	<ul>
      		{this.props.commentList && this.props.commentList.sort((p1, p2) => {

                            switch (sortMode) {
                                case Constants.SORT_BY_SCORE:
                                default:
                                    return p1.voteScore < p2.voteScore ? 1 : -1;
                                case Constants.SORT_BY_NEWEST:
                                    return p1.timestamp < p2.timestamp ? 1 : -1;
                            }
	}).filter((comment) => comment.deleted === false).map((comment) => (
             		
            		<li key={comment.id}>
             			<a className="postLink" href={`/editcomment/${comment.id}`}>
      						<h3>{comment.body}</h3>
						</a>
      					<p>Author: {comment.author}</p>
      					<p>Comment Score: {comment.voteScore}</p>
      					<button onClick={ () => {
							this.props.voteComment(comment.id, true);
					
							}} type="button" className="btn btn-primary btn-sm">Vote Up</button>
      					<button onClick={ () => {
							this.props.voteComment(comment.id, false);
				
							}} type="button" className="btn btn-primary btn-sm">Vote Down</button>

						<button onClick={ () => {
							this.props.deleteComment(comment.id);
							
							}} type="button" className="btn btn-primary btn-sm">Delete</button>

						<a href={'/edit/' + comment.id}> <button type="button" className="btn btn-primary btn-sm">Edit</button></a>
						
             		</li>
            	))
  			}
      	</ul>
		</div>
    )
  }
  
}

function mapStateToProps(state) {
	return {
    	comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
	return {
		voteComment: (commentId, vote) => dispatch(Actions.voteComment(commentId, vote)),
      	deleteComment: (commentId) => dispatch(Actions.deleteComment(commentId))
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);