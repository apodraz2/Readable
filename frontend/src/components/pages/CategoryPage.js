import React, { Component } from 'react';
import * as API from '../../utils/api';
import PostList from '../PostList';

class CategoryPage extends Component {
  state = {
  	postList: '', 
  }
  
  componentDidMount() {
    API.fetchCategoryPosts(this.props.category.url)
    .then((posts) => {
    	this.setState({postList: posts});
  	})
  }
  
  render(){
    const category = this.props.category.url;
    
    const categoryPosts = this.state.postList;
    
    return (
      <div>	
      		<h1>Categories</h1>
      		<p>{category}</p>
			<PostList postList={categoryPosts}/>
   			
		</div>
    );
	
}

  
}


export default CategoryPage;