import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from './Comments';

import { removePost } from '../redux/post/post.actions';

import { addComment } from '../redux/comment/comment.actions';

const SinglePost = ({ posts, params, addComment, comments, removePost }) => {
	// console.log(params.match.params.id);
	console.log(posts);
	console.log(removePost);
	const id = Number(params.match.params.id);
	// console.log(id);
	// console.log(posts);

	// find post id
	const postsIndex = posts.find((p) => p.id === id);
	console.log(postsIndex);

	const index = posts.findIndex((p) => p.id === id);
	console.log(index);

	// output an object of comment & postId
	const commmentMessage = comments.filter((comment) => {
		// console.log(comment);
		return comment.postId === postsIndex.id;
	});

	return (
		<div className='single-photo'>
			<Photo
				post={postsIndex}
				// onRemove={removePost}
				// index={index}
				onHistory={params}
			/>
			<Comments addComment={addComment} comments={commmentMessage} id={id} />
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		posts: state.post.posts,
		comments: state.comment.comments,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removePost: (index) => dispatch(removePost(index)),
		addComment: (comment, postId) => dispatch(addComment(comment, postId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
