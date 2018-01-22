import React, { Component } from 'react';

class CategoryPage extends Component {
  
  render(){
    const category = this.props.category.category;
    return (
   		<div>
   			<h1>Category Page</h1> 
      		<p>{category}</p>
   		</div>
      );
  }
}


export default CategoryPage;