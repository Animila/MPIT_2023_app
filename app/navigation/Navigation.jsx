import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { useAuth } from '../hooks/useAuth'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	const { user } = useAuth()
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<>
						<Stack.Screen name='Home' component={Home}></Stack.Screen>
					</>
				) : (
					<Stack.Screen name='Auth' component={Auth}>
						{' '}
					</Stack.Screen>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
