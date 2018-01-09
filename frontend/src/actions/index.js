export const ADD_POSTS = 'ADD_POSTS';

export function addPost({post}) {
 	return {
     	type: ADD_POSTS,
      		post
    }
};