import React, { Component } from 'react';
import PostList from '.././PostList';
class MainPage extends Component {
  
  render(){ 
   	console.log(this.props);
    return (
      <div>
    	<h1>Readable</h1>
      	<PostList postList={this.props.postList} />
      </div>
    );
  }
}

export default MainPage;