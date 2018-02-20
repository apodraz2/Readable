import React, {Component} from 'react';
import votePost from '../utils/api.js'; 
import * as Date from '../utils/date.js';

class PostList extends Component {
  render() {
    console.log(this.props);
    const postList = this.props.postList.posts;
    
  	return (
      	
      	<ol className="post-list">
      
      
      		{typeof postList !== 'undefined' && postList.length > 0 && postList.map((post) => (
      
       			<li key={post.id} className='post-container post-list-item'>
      				<a className="postLink" href={`/${post.category}/${post.id}`}>
      					<div>
      						<p>Posted on: {Date.getMonth(post.timestamp)}/{Date.getDay(post.timestamp)}/{Date.getYear(post.timestamp)}</p>
      						<h3>{post.title}</h3>
      						<p>{post.body}</p>
      						<h6>Score: {post.voteScore}</h6>
      						<h6>Author: {post.author}</h6>
							<button onClick="${votePost(post.id, 'upVote'}" type="button" className="btn btn-primary btn-sm">Vote Up</button>
      					
							<a href="#"><button type="button" className="btn btn-primary btn-sm">Vote Down</button></a>
						</div>
					</a>
      			</li>
				
       		))
  			}
			
      	</ol>
      
    )
  }
}

export default PostList;
