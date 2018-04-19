import { combineReducers } from 'redux';
import { FETCH_POSTS } from '../actions';
import { FETCH_CATEGORIES } from '../actions';
import { FETCH_COMMENTS } from '../actions';
import { FETCH_POST_SCORE } from '../actions';
import {EDIT_POST} from '../actions';

function posts (state = {posts: []}, action) {
	switch(action.type) {
      case FETCH_POSTS:
        const { posts } = action;
        
        return {
        	...state,
          	posts
        }
        case EDIT_POST: {
            const {post} = action;
			console.log(post);
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id === post.id) {
                        p = post;
                    }

                    return p;
                })
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
            }
      default:
        return state;
  	}
}

function postScore (state = {score: []}, action) {
  	switch(action.type) {
      case FETCH_POST_SCORE:
        const { score } = action;
        	return {
            	...state,
              	score
            }
      default:
        return state;
    }
}

function comments (state = {comments: []}, action) {
 	switch(action.type) {
      case FETCH_COMMENTS:
        const { comments } = action;
        	return {
             	...state,
              	comments
            }
      default:
        return state;
    }
}

export default combineReducers({ posts, categories, comments, postScore });

