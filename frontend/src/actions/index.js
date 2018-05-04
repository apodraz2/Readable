import * as API from '../utils/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const VOTE_POST = "VOTE_POST";
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

export function updatePosts(posts) {
 	return {
    	type: FETCH_POSTS,
      	posts: posts
    }
}

export function updateCategories(categories) {
 	return {
    	type: FETCH_CATEGORIES,
      	categories: categories
    }
}

export function fetchPosts() {
  	
 	const request = API.fetchPosts();
	
  	return dispatch => {
    	request.then(( data ) => {
      		dispatch({ type: FETCH_POSTS, payload: data })
    	})
	}
};

export function fetchCategories() {
	const request = API.fetchCategories();
	
  	return dispatch => {
    	request.then(( data ) => {
      		dispatch({ type: FETCH_CATEGORIES, categories: data })
    	})
	}
};

export function fetchComments(postId) {
  const request = API.fetchComments(postId);
  
  return dispatch => {
  	request.then(( data ) => {
    	dispatch({ type: FETCH_COMMENTS, comments: data, postId: postId });
  	})
  }
}

export function votePost(id, vote) {
  const request = API.votePost(id, vote);
  
  return dispatch => {
  	request.then(( data ) => {
      dispatch({ type: VOTE_POST, post: data });
    })
  }
}

export function deletePost(postId) {
  const request = API.deletePost(postId);
  
  return dispatch => {
    request.then(( data ) => {
      dispatch({ type: DELETE_POST, post: data });
    })
  }
}

export function editComment(comment) {
  return dispatch => {
  	dispatch({ type: EDIT_COMMENT, comment: comment })
  } 
}

export function addComment(comment) {
  return dispatch => {
   	dispatch({ type: ADD_COMMENT, comment: comment }) 
  }
}

export function voteComment(commentId, vote) {
  const request = API.voteComment(commentId, vote);
  
  return dispatch => {
  	request.then((data) => {
      dispatch({ type: VOTE_COMMENT, comment: data });
    })
  }
}

export function deleteComment(commentId) {
  const request = API.deleteComment(commentId);
  
  return dispatch => {
  	request.then((data) => {
   	  dispatch({ type: DELETE_COMMENT, comment: data }); 
    })
  }
}

export function createPost(post) {
  
 	return {
     	type: CREATE_POST,
      	post: post
    }
}

export function editPost(post, postId) {
  const request = API.editPost(post, postId);
  
  return dispatch => {
  	request.then((data) => {
      dispatch({ type: EDIT_POST, post: data, postId: postId });
    })
  }
}

