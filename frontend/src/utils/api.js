const endpoint = `${process.env.REACT_APP_BACKEND}`;

const headers = { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' }; 

const Authorization = {'Authorization': 'whatever-you-want'};


export function fetchPosts() {
  	let url = endpoint + '/posts';
  	console.log(url);
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
 	let url = endpoint + '/'+ category + '/posts';
  	
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
 	return fetch(`${endpoint}/posts/${postId}`, {
     	method: 'POST',
      	headers: headers,
      	body: JSON.stringify({option: vote ? 'upVote' : 'downVote'})
    })
    .then((res) => res.json())
  	.catch((e) => {
    	console.log("Error: " + e);
    })
}

export function deletePost(postId) {
    return fetch(`${endpoint}/posts/${postId}`, {
        method: 'DELETE',
        headers: headers
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function editPost(id, postData) {
  	console.log(`${endpoint}/posts/${id}`);
    return fetch(`${endpoint}/posts/${id}`, {
        method: 'PUT',
        headers: new Headers({
            Authorization,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
		}),
        body: JSON.stringify(postData)
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function fetchComments(id) {
    if (id) {
        return fetch(`${endpoint}/posts/${id}/comments`, {method: 'GET', headers})
            .then((res) => res.json())
            .catch((e) => {
                console.log("Error:", e)
            })
    } else {
        console.error("id can't be null")
    }
}

export function deleteComment(commentId) {
    return fetch(`${endpoint}/comments/${commentId}`, {
        method: 'DELETE',
        headers: headers
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function voteComment(commentId, vote) {
    return fetch(`${endpoint}/comments/${commentId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({option: vote ? 'upVote' : 'downVote'})
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function addComment(comment) {
    return fetch(`${endpoint}/comments/`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(comment)
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function editComment(id, commentData) {
    return fetch(`${endpoint}/comments/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(commentData)
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}

export function getComment(id) {
    return fetch(`${endpoint}/comments/${id}`, {
        method: 'GET',
        headers: headers
    })
        .then((res) => res.json())
        .catch((e) => {
            console.log("Error:", e)
        })
}