const INITIAL_STATE = {
	comments: [],
};

const commentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			console.log('add comment', action.comment);
			return {
				...state,
				comments: [...state.comments, action.comment],
			};

		// if (!state[action.postId]) {
		// 	return { ...state, [action.postId]: [action.comment] };
		// } else {
		// 	return {
		// 		...state,
		// 		[action.postId]: [...state[action.postId], action.comment],
		// 	};
		// }

		default:
			return state;
	}
};

export default commentReducer;
