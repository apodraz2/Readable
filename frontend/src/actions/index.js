export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_POST_SCORE = 'FETCH_POST_SCORE';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';

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

export function fetchComments(comments) {
 	return {
     	type: FETCH_COMMENTS,
      	comments
    }
};

export function fetchPostScore(score) {
	return {
     	type: FETCH_POST_SCORE,
      	score
    }
}

export function createPost(post) {
 	return {
     	type: CREATE_POST,
      	post
    }
}

export function editPost(post) {
 	return {
     	type: EDIT_POST,
      	post
    }
}

