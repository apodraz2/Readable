import { combineReducers } from 'redux';
import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES } from '../actions';
import { FETCH_COMMENTS } from '../actions';
import { EDIT_POST } from '../actions';
import { VOTE_POST } from '../actions';
import { DELETE_POST } from '../actions';
import { VOTE_COMMENT } from '../actions';
import { DELETE_COMMENT } from '../actions';
import { CREATE_POST } from '../actions';
import { EDIT_COMMENT } from '../actions';
import { ADD_COMMENT } from '../actions';


function posts (state = {posts: []}, action) {
  	
	switch(action.type) {
      case FETCH_POSTS: {
        const { posts } = action;
        
        return {
          ...state,
          posts
        };
        
      }
      
      case VOTE_POST: {
       	const { post } = action;
        
        const newPosts = state.posts.map((p) => {
            	if(p.id === post.id) {
                  return post
                }
              return p;
            });
        return {
          	...state,
           	posts: newPosts
         };
      }
      
      case DELETE_POST: {
       	const {post} = action;
        
        const newPosts = state.posts.map((p) => {
            	if(p.id === post.id) {
                  return post
                }
              return p;
            });
        
        return {
          ...state,
          posts: newPosts
        }
      }
      case CREATE_POST: {
      	const {post} = action;
        
        return {
          ...state,
          posts: state.posts.concat(post)
        }
      }
      case EDIT_POST: {
        const {post} = action;
        const {postId} = action;
        post.id = postId;
        const newPosts = state.posts.map((p) => {
          if(p.id === post.id) {
           	return post; 
          }
          return p;
        });
        
        return {
                ...state,
                posts: newPosts
            };
	}
      default:
        return state;
    }
}

function categories (state = {categories: []}, action) {
  	switch(action.type) {
      case FETCH_CATEGORIES:
        
        const { categories } = action;
        return {
          ...state, 
          categories
        };
        
      default:
        return state;
  	}
}

function comments (state = {comments: []}, action) {
 	switch(action.type) {
      case FETCH_COMMENTS: {
        const {comments, postId} = action;
        return { 
          ...state,
          comments: {
            ...state.comments,
          	[postId]: comments
          } 
        }
      }
      case VOTE_COMMENT: {
        const {comment} = action;
        const parentId = comment.parentId;
        const newComments = state.comments[parentId].map((c) => {
            	if(c.id === comment.id) {
                  return comment;
                }
              return c;
            });
        return {
          comments: {
            [parentId]: newComments
          } 
        }
      }
      
      case EDIT_COMMENT: {
        const {comment} = action;
        const newComments = state.comments[comment.parentId].map((c) => {
          if(c.id === comment.id) {
           	return comment; 
          }
          return c;
        });
       return {
         comments: {
           ...state,
           [comment.parentId]: newComments
         }
       }
                                                                
      }
      case ADD_COMMENT: {
       	const {comment} = action;
        console.log(comment);
        const newComments = state.comments[comment.parentId].map((c) => {
            	if(c.id === comment.id) {
                  return comment
                }
              return c;
            });
        
        return {
          comments: {
          	...state,
          	[comment.parentId]: newComments
          }
        }
        
      }
      case DELETE_COMMENT: {
        const {comment} = action;
        
        const newComments = state.comments[comment.parentId].map((c) => {
            	if(c.id === comment.id) {
                  return comment
                }
              return c;
            });
        
        return {
          comments: {
          	...state,
          	[comment.parentId]: newComments
          }
        }
      }
      default:
        return state;
    }
}

export default combineReducers({ posts, categories, comments });

