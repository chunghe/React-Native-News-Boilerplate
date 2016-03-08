import React, { TouchableOpacity, Text, StyleSheet, PropTypes } from 'react-native'

const NavButton = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.buttonHandler}>
			<Text style={styles.label}>Go to {props.destLabel} Page</Text>
		</TouchableOpacity>
	)
}

NavButton.propTypes = {
	destLabel: PropTypes.string.isRequired,
	buttonHandler: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		padding: 15,
		backgroundColor: '#FF6138',
		width: 2000
	},
	label: {
		color: '#ffffff',
		textAlign: 'center'
	}
})

export default NavButton