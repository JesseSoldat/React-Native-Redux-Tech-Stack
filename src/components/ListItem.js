import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;
		return (
			<CardSection>
				<Text style={titleStyle}>
					{this.props.library.title}
					</Text>
			</CardSection>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyle: {
		paddingLeft: 10,
		padddingRight: 10
	}
};

export default ListItem;