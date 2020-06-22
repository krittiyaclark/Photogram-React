import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ post, onRemove }) => {
	return (
		<figure className='figure'>
			<img className='photo' src={post.imageLink} alt={post.description} />
			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className='button-contianer'>
				<button
					className='remove-button'
					onClick={() => {
						onRemove(post);
					}}>
					Remove
				</button>
			</div>
		</figure>
	);
};

Photo.propType = {
	post: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default Photo;
