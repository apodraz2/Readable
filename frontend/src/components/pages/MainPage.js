import React, { Component } from 'react';
import PostList from '.././PostList';
import CategoryList from '.././CategoryList';
class MainPage extends Component {
  
  render(){ 
   	console.log(this.props);
    return (
      <div className="container-fluid">
      	<div className="row">
    		<h1 className="title">Readable</h1>
      	</div>
      	<div className="row">
      		<div className="col-md-9">
      			<PostList postList={this.props.postList} />
      		</div>
      		<div className="col-md-3 category-list">
      			<CategoryList categoryList={this.props.categoryList}/>
      		</div>      
      	</div>
      	<a href="/newpost"><button type="button" className="btn btn-primary btn-lg btn-block bottom-button">New Post</button></a>
      </div>
      
    );
  }
}

export default MainPage;

