import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from './Comments';

import { addComment } from '../redux/comment/comment.actions';

const SinglePost = ({ posts, params, addComment, comments, postId }) => {
	console.log(params.match.params.id);
	console.log(params);
	console.log(addComment);

	const id = Number(params.match.params.id);
	console.log(id);

	console.log(posts);
	const singlePost = posts.find((p) => p.id === id);
	console.log(singlePost);

	return (
		<div className='single-photo'>
			<Photo post={singlePost} />
			<Comments
				addComment={(comments) => addComment(comments)}
				comments={comments}
				id={id}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		posts: state.post.posts,
		comments: state.comment,
		postId: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addComment: (comment) => dispatch(addComment(comment)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
