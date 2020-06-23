import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const PhotoLits = ({ posts, onRemove, otherProps }) => {
	console.log(posts);
	return (
		<>
			<Link className='addIcon' to='/addPhoto' />
			<div className='photo-grid'>
				{posts &&
					posts
						.sort((a, b) => b.id - a.id)
						.map((post, index) => (
							<Photo
								key={index}
								post={post}
								onRemove={onRemove}
								index={index}
								{...otherProps}
							/>
						))}
			</div>
		</>
	);
};

PhotoLits.propTypes = {
	// posts: PropTypes.array.isRequired,
	// onRemove: PropTypes.func.isRequired,
};

export default PhotoLits;
