import React from 'react';

const Comments = ({ post, addComment, comments, id }) => {
	console.log(comments);
	console.log(id);

	const handleSubmit = (event) => {
		event.preventDefault();

		const comment = event.target.elements.comment.value;
		addComment(comment, id);

		console.log('comment:' + comment, id);
	};

	// const commentResult =
	// 	comments.comments &&
	// 	comments.comments.map((comment, index) => <p key={index}>{comment}</p>);

	return (
		<div className='comment'>
			{/* {commentResult} */}
			<form className='comment-form' onSubmit={handleSubmit}>
				<input type='text' placeholder='Comment' name='comment' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Comments;
