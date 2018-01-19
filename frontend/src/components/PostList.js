import React, {Component} from 'react';

import * as Date from '../utils/date.js';

class PostList extends Component {
  render() {
    
    const postList = this.props.postList.posts;
    
  	return (
      	<div >
      	<ol className="postList">
      
      
      		{typeof postList !== 'undefined' && postList.length > 0 && postList.map((post) => (
      
       			<li key={post.id} className='postListItem'>
      				<a className="postLink" href={`/${post.category}/${post.id}`}>
      					<div>
      						<p>Posted on: {Date.getMonth(post.timestamp)}/{Date.getDay(post.timestamp)}/{Date.getYear(post.timestamp)}</p>
      						<h3>{post.title}</h3>
      						<p>{post.body}</p>
      						<h6>Score: {post.voteScore}</h6>
      						<h6>Author: {post.author}</h6>
      					</div>
					</a>
      			</li>
				
       		))
  			}
			
      	</ol>
      </div>
      
    )
  }
}

export default PostList;
