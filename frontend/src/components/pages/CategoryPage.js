import React, { Component } from 'react';
import PostList from '../PostList';
import { connect } from 'react-redux';

class CategoryPage extends Component {
  
  render(){
    const category = this.props.category.url.substr(1);
    console.log(category);
    
    const posts = this.props.posts;
    console.log(posts);
    const categoryPosts = posts.filter((post) => post.category === category);
    
    return (
      <div className="container mt-2">
      		<div className="row">
    			<a href='/'><h1 className="title">Readable</h1></a>
      		</div>
      		<h1>Categories</h1>
      		<p>Category: {category}</p>
			<PostList postList={categoryPosts}/>
   			
		</div>
    );
	
}

  
}

function mapStateToProps({posts}) {
 	return {
     	posts: posts.posts 
    }
}


export default connect(mapStateToProps)(CategoryPage);