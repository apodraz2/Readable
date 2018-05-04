import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import PostForm from "../PostForm";

class EditPostPage extends Component {

    render() {
        const {id} = this.props.match.params;
        const {categories, posts} = this.props;
        let post = posts.filter((p) => {
            return p.id === id
        });

        if (post.length === 1) {
            post = post[0];
        } else {
            post = null;
        }

        return (
            <div>

                {(post) ? (
                    <div className="container mt-2">
                        <PostForm category={post.category} categories={categories.categories}
                                   initialData={post}
                                   onSubmitForm={this.props.editPost}
          						   postId={post.id}
                        />
                    </div>
                ) : (<div/>)}
            </div>
        );
    }
}

function mapStateToProps({posts, categories}) {
    return {
        posts: posts.posts,
        categories: categories.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (post) => dispatch(Actions.createPost(post)),
        editPost: (post, postId) => dispatch(Actions.editPost(post, postId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage));