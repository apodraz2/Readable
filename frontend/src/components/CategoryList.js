import React, {Component} from 'react';

class CategoryList extends Component {
 	
  render(){
    const categoryList = this.props.categoryList;
    
    console.log(categoryList);
    
    return(
    	<div>
      	<h1>Categories</h1>
      	</div>
    ) 
  }
}

export default CategoryList;

