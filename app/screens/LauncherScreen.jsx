import React from 'react'
import { Image, View } from 'react-native'

const LauncherScreen = () => {
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
