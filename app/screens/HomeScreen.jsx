import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, View } from 'react-native'
import CabinaetScreem from './CabinetScreen/CabinaetScreem'
import MapScreen from './MapScreen/MapScreen'
import NarniaScreen from './NarniaScreen/NarniaScreen'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				options={{
					headerShown: false,
					showLabel: false,
					tabBarIcon: ({}) => (
						<View className='items-center justify-start'>
							<Image
								source={require('../../assets/images/map.png')}
								resizeMode='contain'
								className='w-[18px] h-[18px] '
							/>
						</View>
					),
				}}
				name='Карта'
				component={MapScreen}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					showLabel: false,
					tabBarIcon: ({}) => (
						<View className='items-center justify-start'>
							<Image
								source={require('../../assets/images/search.png')}
								resizeMode='contain'
								className='w-[32px] h-[32px] '
							/>
						</View>
					),
				}}
				name='Нарния'
				component={NarniaScreen}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					showLabel: false,
					tabBarIcon: ({}) => (
						<View className='items-center justify-start'>
							<Image
								source={require('../../assets/images/account.png')}
								resizeMode='contain'
								className='w-[18px] h-[18px] '
							/>
						</View>
					),
				}}
				name='Аккаунт'
				component={CabinaetScreem}
			/>
		</Tab.Navigator>
	)
}

export default HomeScreen
