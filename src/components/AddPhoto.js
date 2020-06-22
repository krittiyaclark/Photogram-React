import React, { Component } from 'react';

class AddPhoto extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const imageLink = event.target.elements.link.value;
		const description = event.target.elements.description.value;
		const post = {
			id: Number(new Date()),
			description: description,
			imageLink: imageLink,
		};

		if (imageLink && description) {
			this.props.onAddPhoto(post);
		}
	};

	render() {
		return (
			<div>
				<h1>Photogram</h1>
				<form className='form' onSubmit={this.handleSubmit}>
					<input type='text' placeholder='Link' name='link' />
					<input type='text' placeholder='Description' name='description' />
					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default AddPhoto;
