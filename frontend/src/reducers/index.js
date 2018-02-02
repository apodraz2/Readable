import { combineReducers } from 'redux';
import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES } from '../actions';

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

function categories (state = {categories: []}, action) {
  	switch(action.type) {
      case FETCH_CATEGORIES:
        const { categories } = action;
        	return {
              	...state,
              	categories
            }
      default:
        return state;
  	}
}

export default combineReducers({ posts, categories });

