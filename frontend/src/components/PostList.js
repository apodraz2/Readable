import React, {Component} from 'react';

class PostList extends Component {
  render() {
    const postList = this.props.posts;
    
  	return (
      
      <div>
      <ol className="postList">
      {typeof postList !== "string" && postList.map((post) => (
       	<li key={post.id}>
      		<h3>{post.title}</h3>
      		<p>{post.body}</p>
      		<h6>Score: {post.voteScore}</h6>
      		<h6>Author: {post.author}</h6>
      		
      	</li>
       ))
  	}
      </ol>
      </div>
      
    )
  }
}

export default PostList;
