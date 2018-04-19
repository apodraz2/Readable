import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as Actions from "../../actions";
import PostForm from "../PostForm";
import * as API from "../../utils/api";

class EditPostPage extends Component {
    submitForm = (data) => {
        const {id} = this.props.match.params;
        const {posts} = this.props;
		
        let post = posts.filter((p) => {
            return p.id === id
        });
		
        if (post.length) {
            post = post[0];
        } else {
            post = null;
        }
        if (post) {
            API.editPost(id, {
                title: data.title,
                body: data.body
            }).then((post) => {
              	console.log(post.title);
                this.props.editPost(post);
                this.props.history.push(`/${post.category}/${post.id}`);
            }).catch((e) => {
                console.error("Error editing post: ", e)
            });
        }
    };

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
                                   onSubmitForm={(data) => {
                                       this.submitForm(data)
                                   }}
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
        editPost: (post) => dispatch(Actions.editPost(post)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage));