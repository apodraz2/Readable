const endpoint = `${process.env.REACT_APP_BACKEND}` || 'http://localhost:3001';

const cred = ((endpoint === `${process.env.REACT_APP_BACKEND}`) ? 'include' : 'true');


const headers = { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: cred }; 

const Authorization = {'Authorization': 'whatever-you-want'};


export function fetchPosts() {
  	let url = endpoint + '/posts';
    return fetch(url, headers)
  		.then( (res) => { return(res.text()) })
        .then((data) => { 
      		
      		let jsonData = JSON.parse(data);
      		return jsonData;
    	})
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function fetchPost(postId) {
  let url = `${endpoint}/posts/${postId}`;
  
  return fetch(url, headers)
  	.then((res) => res.json())
	.catch((e) => {
    	console.log("Error:", e);
  	})
}

export function addPost(post) {
	let url = endpoint + "/posts";
  	
  	return fetch(url, {
        method: 'POST', 
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
        body: JSON.stringify(post)
		})
		.then((data) => data.json())
		.catch((e) => {
        	console.log("Error: ", e);
        });
}

export function fetchCategories() {
  let url = endpoint + "/categories";
  
  return fetch(url, headers)
  	.then((res) => { return (res.text()) } )
  	.then((data) => {
    	let jsonData = JSON.parse(data);
    	return jsonData;
  	})
  	.catch((e) => {
    	console.log("Error:", e)
  	});
}

export function fetchCategoryPosts(category) {
 	let url = `${endpoint}${category}/posts`;
  	
  	return fetch(url, headers)
  		.then((res) => { return (res.text()) } )
  		.then((data) => { 
      		let jsonData = JSON.parse(data);
      		return jsonData;
    	})
  		.catch((e) => {
            console.log("Error:", e)
        });
}

export function votePost(postId, vote) {
  	let url = `${endpoint}/posts/${postId}`;
 	return fetch(url, {
     	method: 'POST',
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
      	body: JSON.stringify({option: vote ? 'upVote' : 'downVote'})
    })
    .then((res) => res.json())
  	.catch((e) => {
    	console.log("Error: " + e);
    })
}

export function deletePost(postId) {
    let url = `${endpoint}/posts/${postId}`;
 	return fetch(url, {
     	method: 'DELETE',
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
		}),
      	credentials: cred
    	})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function editPost(post, postId) {
    return fetch(`${endpoint}/posts/${postId}`, {
        method: 'PUT',
        headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
        body: JSON.stringify(post)
		})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function fetchComments(id) {
  let url = endpoint + '/posts/' + id + '/comments';
  
  return fetch(url, headers)
    .then( (res) => { 
    	return res.text();
     })
     .then((data) => { 
      	let jsonData = JSON.parse(data);
      	return jsonData;
      })
      .catch((e) => {
        console.log("Error:", e)
      })
}

export function deleteComment(commentId) {
  	let url = `${endpoint}/comments/${commentId}`;
    return fetch(url, {
     	method: 'DELETE',
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred
    	})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function voteComment(commentId, vote) {
  	let url = `${endpoint}/comments/${commentId}`;
    return fetch(url, {
     	method: 'POST',
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
        body: JSON.stringify({option: vote ? 'upVote' : 'downVote'})
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function addComment(comment) {
    let url = endpoint + "/comments";
  	
  	return fetch(url, {
        method: 'POST', 
      	headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
        body: JSON.stringify(comment)
		})
		.then((data) => data.json())
		.catch((e) => {
        	console.log("Error: ", e);
        });
}

export function editComment(id, comment) {
    return fetch(`${endpoint}/comments/${id}`, {
        method: 'PUT',
        headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
		}),
      	credentials: cred,
        body: JSON.stringify(comment)
		})
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function fetchComment(id) {
    let url = `${endpoint}/comments/${id}`;
  
  return fetch(url, headers)
  	.then((res) => res.json())
	.catch((e) => {
    	console.log("Error:", e);
  	})
}