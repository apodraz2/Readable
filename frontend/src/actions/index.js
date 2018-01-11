export const ADD_POSTS = 'ADD_POSTS';

export function addPost({posts}) {
 	return {
     	type: ADD_POSTS,
      		posts
    }
};