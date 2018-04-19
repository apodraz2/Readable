import React, { Component } from 'react';
import PostList from '.././PostList';
import CategoryList from '.././CategoryList';
import * as Constants from '../../utils/constants';
class MainPage extends Component {
  state = {
  	sortMode: Constants.SORT_BY_SCORE
  }
  
  render(){ 
    return (
      <div className="container-fluid">
      	<div className="row">
    		<h1 className="title">Readable</h1>
      	</div>
      	<button type="button" onClick={() => this.setState({sortMode: Constants.SORT_BY_SCORE})}>Sort by score</button>
		<button type="button" onClick={() => this.setState({sortMode: Constants.SORT_BY_NEWEST})}>Sort by date</button>
      	<div className="row">
      		
      		<div className="col-md-9">
      			<PostList postList={this.props.postList} deletePost={this.props.deletePost} sortMode={this.state.sortMode}/>
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

