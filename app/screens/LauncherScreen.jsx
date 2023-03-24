import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { useAuth } from '../hooks/useAuth'

const LauncherScreen = () => {
	const navigation = useNavigation()
	const { check, isLoading } = useAuth()
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			check()
			const checked = await AsyncStorage.getItem('user')
			const user = JSON.parse(checked)

			console.log(user)
			if (user) {
				setIsAuth(true)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (isAuth) {
			navigation.replace('Home')
		} else {
			navigation.replace('Auth')
		}
	}, [isAuth])
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
