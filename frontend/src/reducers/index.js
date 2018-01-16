import { combineReducers } from 'redux';
import { FETCH_POSTS } from '../actions';

function posts (state = {posts: []}, action) {
	switch(action.type) {
      case FETCH_POSTS:
        const { posts } = action;
        
        return {
        	...state,
          	posts
        }
      default:
        return state;
    }
}

export default combineReducers({ posts });

