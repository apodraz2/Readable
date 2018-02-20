

const endpoint = `${process.env.REACT_APP_BACKEND}`;

const headers = { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' }; 


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

