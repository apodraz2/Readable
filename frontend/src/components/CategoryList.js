import React, {Component} from 'react';

class CategoryList extends Component {
 	
  render(){
    const categoryList = this.props.categoryList.categories.categories;
    
    return(
    	<div>
      		<h2>Categories</h2>
      {categoryList && categoryList.map((category) => (
      			<div key={category.name} >
    				<a href={`/${category.path}`}><h4 className="category-item">{category.name}</h4></a>
      			</div>
    	))}
      	</div>
    ) 
  }
}

export default CategoryList;

