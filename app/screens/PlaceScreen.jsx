import React from 'react'
import { Text, View } from 'react-native'

const PlaceScreen = ({ card }) => {
	return (
		<View>
			<Text>{card.title}</Text>
		</View>
	)
}

export default PlaceScreen
