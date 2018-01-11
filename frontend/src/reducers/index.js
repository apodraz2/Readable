import { combineReducers } from 'redux';
import { ADD_POSTS } from '../actions';

function posts (state = {posts: []}, action) {
	switch(action.type) {
      case ADD_POSTS:
        const { posts } = action;
        console.log(action);
        return {
        	...state,
          	posts
        }
      default:
        return state;
    }
}

export default combineReducers({ posts });

