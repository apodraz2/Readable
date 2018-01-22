import React, { Component } from 'react';
import PostList from '.././PostList';
class MainPage extends Component {
  
  render(){ 
   	console.log(this.props);
    return (
      <div className="container-fluid">
      	<div className="title row">
    		<h1 className="center">Readable</h1>
      	</div>
      	<div className="row">
      		<PostList postList={this.props.postList}/>
      	</div>
      </div>
    );
  }
}

export default MainPage;

