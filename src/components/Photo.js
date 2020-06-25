import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Photo = ({ post, onRemove, index, onHistory }) => {
	console.log(index);
	return (
		<figure className='figure'>
			<Link to={`/single-post/${post.id}`}>
				<img className='photo' src={post.imageLink} alt={post.description} />
			</Link>

			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className='button-contianer'>
				<button
					className='remove-button'
					onClick={() => {
						onRemove(index);
						// onHistory.history.push('/');
					}}>
					Remove
				</button>
			</div>
		</figure>
	);
};

Photo.propType = {
	// post: PropTypes.object.isRequired,
	// onRemove: PropTypes.func.isRequired,
};

export default Photo;
