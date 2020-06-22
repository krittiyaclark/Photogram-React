import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

const PhotoLits = ({ posts, onRemove }) => {
	return (
		<div className='photo-grid'>
			{posts.map((post) => (
				<Photo key={post.id} post={post} onRemove={onRemove} />
			))}
		</div>
	);
};

PhotoLits.propTypes = {
	posts: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default PhotoLits;
