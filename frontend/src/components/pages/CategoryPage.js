import React, { Component } from 'react';
import * as API from  '../../utils/api';
import PostList from '../PostList';

class CategoryPage extends Component {
  
  componentDidMount() {
   	 
  }
  
  render(){
    const category = this.props.category.category;
    let categoryPosts = [];
    API.fetchCategoryPosts(category).then((posts) => {
      categoryPosts = posts;
    });
    console.log(categoryPosts);
    
    return (
      <div>	
      		<h1>Categories</h1>
      		<p>/{category}</p>
   			<PostList postList={categoryPosts} />
		</div>
    );
	
}

  
}


export default CategoryPage;