import React, { Component } from 'react';


class DetailPage extends Component {
  componentDidMount() {
        const postList = this.props.postList.posts;

        const id = this.props.id;
	
    	let post = postList.length > 0 ? postList.filter((p) => {
            	return p.id === id
        	}) : [];
        

        if (post.length === 1) {
            post = post[0];
        } else {
            post = null;
        }

        
    }
  
  render() {
    
    	const postList = this.props.postList.posts;

        const id = this.props.id;
		
        let post = postList.length > 0 ? postList.filter((p) => {
          		console.log(p.id);
            	return p.id === id
        	}) : [];
    
        if (post.length === 1) {
            post = post[0];
        } else {
            post = "Error";
        }
    
   	return  ( 
      <div>
      	<h1 className="title">Post Detail Page</h1> 
      	<h3>{post ? post.title : "ERROR"}</h3>
      	<p>{post ? post.body : "ERROR"}</p>
    </div>
    );
  }
}

export default DetailPage;