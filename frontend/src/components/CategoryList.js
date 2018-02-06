import React, {Component} from 'react';

class CategoryList extends Component {
 	
  render(){
    const categoryList = this.props.categoryList.categories.categories;
    
    return(
    	<div className="categoryList">
      		<h2>Categories</h2>
      {categoryList && categoryList.map((category) => (
      			<div key={category.name} >
    				<a href={`/${category.path}`}><h3>{category.name}</h3></a>
      			</div>
    	))}
      	</div>
    ) 
  }
}

export default CategoryList;

