// Remove Post
export const removePost = (index) => {
	return {
		type: 'REMOVE_POST',
		index,
	};
};

// Add post
export const addPost = (post) => {
	return {
		type: 'ADD_POST',
		post,
	};
};
