import React from 'react';

const Comments = ({ post, addComment, comments }) => {
	console.log(comments);
	console.log(addComment);

	const handleSubmit = (event) => {
		event.preventDefault();

		const comment = event.target.elements.comment.value;
		addComment(comment);
	};

	const commentResult =
		comments.comments &&
		comments.comments.map((comment, index) => <p key={index}>{comment}</p>);

	return (
		<div className='comment'>
			{commentResult}
			<form className='comment-form' onSubmit={handleSubmit}>
				<input type='text' placeholder='Comment' name='comment' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Comments;
