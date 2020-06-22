import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const PhotoLits = ({ posts, onRemove }) => {
	return (
		<>
			<Link className='addIcon' to='/addPhoto' />
			<div className='photo-grid'>
				{posts
					.sort((a, b) => b.id - a.id)
					.map((post) => (
						<Photo key={post.id} post={post} onRemove={onRemove} />
					))}
			</div>
		</>
	);
};

PhotoLits.propTypes = {
	posts: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default PhotoLits;
