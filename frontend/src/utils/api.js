

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

