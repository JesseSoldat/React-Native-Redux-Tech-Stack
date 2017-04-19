import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class ListItem extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.library.title}</Text>
			</View>
		);
	}
}

export default ListItem;