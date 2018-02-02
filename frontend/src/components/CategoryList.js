import React, {Component} from 'react';

class CategoryList extends Component {
 	
  render(){
    const categoryList = this.props.categoryList.categories.categories;
    
    
    
    return(
    	<div>
      	<h1>Categories</h1>
      {categoryList && categoryList.map((category) => <p>Category</p>)}
      	</div>
    ) 
  }
}

export default CategoryList;

