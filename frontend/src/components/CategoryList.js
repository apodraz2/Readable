import React, {Component} from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {

  render(){
    const categories = this.props.categoryList.categories;
    return(
    	<div>
      		<h2>Categories</h2>
      {categories && categories.map((category) => (
      			<div key={category.name} >
    				<a href={`/${category.path}`}><h4 className="category-item">{category.name}</h4></a>
      			</div>
    	))}
      	</div>
    ) 
  }
}

function mapStateToProps(state) {
	return {
		categoryList: state.categories.categories
	}
}


export default connect(mapStateToProps)(CategoryList);

