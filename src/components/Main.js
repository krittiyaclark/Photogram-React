import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Title from './Title';
import PhotoLits from './PhotoLits';
import AddPhoto from './AddPhoto';
import { removePost, addPost } from '../redux/post.actions';

class Main extends Component {
	// removeHandle = (postRemoved) => {
	// 	console.log(postRemoved.description);
	// 	this.setState((prevState) => ({
	// 		posts: prevState.posts.filter((post) => post !== postRemoved),
	// 	}));
	// };

	// addPhotoHandle = (postSubmitted) => {
	// 	this.setState((state) => ({
	// 		posts: state.posts.concat([postSubmitted]),
	// 	}));
	// };

	// componentDidMount() {
	// 	this.props.removePost();
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log(prevState.posts);
	// 	console.log(this.state);
	// }

	// this.props.dispatch(removeHandle)
	render() {
		const { posts, removePost, addPost } = this.props;
		console.log('render');
		console.log(this.props);

		return (
			<>
				<Route
					exact
					path='/'
					render={() => (
						<>
							<h1>
								<Link to='/'>Photogram</Link>
							</h1>
							{/* <Title title={'Photogram'} /> */}
							<PhotoLits
								posts={posts}
								onRemove={(index) => removePost(index)}
							/>
						</>
					)}
				/>
				<Route
					path='/addPhoto'
					render={({ history }) => (
						<AddPhoto
							onAddPhoto={(post) => addPost(post)}
							onHistory={history}
							// {...this.props}
						/>
					)}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removePost: (index) => dispatch(removePost(index)),
		addPost: (post) => dispatch(addPost(post)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
