import React, {Component} from 'react';
import Post from './Post';
import * as Constants from '../utils/constants';

class PostList extends Component {
  static filterPosts(posts, displayDeleted) {
        if (!displayDeleted && posts) {
            return posts.filter((post) => (!post.deleted));
        } else {
            return posts || [];
        }
  }
  
  render() {
    
    const postList = this.props.postList.posts;
    const sortMode = this.props.sortMode;
    
  	return (
      	
      	<ol className="post-list">
      		{typeof postList !== 'undefined' && postList.length > 0 && PostList.filterPosts(postList, true).sort((p1, p2) => {
                            switch (sortMode) {
                                case Constants.SORT_BY_SCORE:
                                default:
                                    return p1.voteScore < p2.voteScore ? 1 : -1;
                                case Constants.SORT_BY_NEWEST:
                                    return p1.timestamp < p2.timestamp ? 1 : -1;
                            }
	}).filter((post) => post.deleted !== true).map((post) => (
      
      			<li key={post.id} className='post-container post-list-item'>
       				<Post post={post} deletePost={this.props.deletePost}/>
				</li>
       		))
  			}
			
      	</ol>
      
    )
  }
}

export default PostList;


