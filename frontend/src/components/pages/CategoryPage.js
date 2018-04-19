import React, { Component } from 'react';

class CategoryPage extends Component {
  
  componentDidMount() {
   	 
  }
  
  render(){
    const category = this.props.category.url;
    
    const categoryPosts = this.props.postList;
    
    
    return (
      <div>	
      		<h1>Categories</h1>
      		<p>{category}</p>
   			
		</div>
    );
	
}

  
}


export default CategoryPage;