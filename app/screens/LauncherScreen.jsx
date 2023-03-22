import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { useAuth } from '../hooks/useAuth'

const LauncherScreen = () => {
	const navigation = useNavigation()
	const { isLoading, user } = useAuth()
	useEffect(() => {
		setTimeout(() => {
			if (!isLoading && user) {
				navigation.replace('Home')
			} else {
				navigation.replace('Auth')
			}
		}, 3000)
	}, [])
	return (
		<View className='w-screen h-full flex flex-col justify-center items-center'>
			<Image
				source={require('../../assets/images/logo.png')}
				className='h-fit w-fit'
			/>
		</View>
	)
}

export default LauncherScreen
