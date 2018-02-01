export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchPosts(posts) {
 	return {
     	type: FETCH_POSTS,
      	posts
    }
};

export function fetchCategories(categories) {
	return {
     	type: FETCH_CATEGORIES,
      	categories
    }
};

