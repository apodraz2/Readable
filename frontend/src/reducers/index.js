import { combineReducers } from 'redux';
import { ADD_POSTS } from '../actions';

function posts (state={}, action) {
	switch(action.type) {
      case ADD_POSTS:
        const { post } = action;
        return {
        	...state,
          	[post]: post
        }
      default:
        return state;
    }
}

export default combineReducers({ posts });

