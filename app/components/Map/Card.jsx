import React from 'react'
import { Image, Text, View } from 'react-native'
import StarRating from '../StarRating'

const Card = ({ marker }) => {
	return (
		<View
			className='bg-[#fff] mx-[10px] shadow-[#000] h-[220px] w-[400px] overflow-hidden rounded-tl-lg rounded-tr-lg'
			style={{
				shadowOffset: 'x: 2, y: -2',
				shadowOpacity: 0.3,
				shadowRadius: 5,
				elevation: 2,
			}}
		>
			<Image
				source={{
					uri: marker.url,
				}}
				className='flex-3 w-full h-[100px] self-center'
				resizeMode='cover'
			/>
			<View className='flex-2 p-[10px]'>
				<Text
					numberOfLines={1}
					className='text-[12px] font-sans-bold font-[700]'
				>
					{marker.title}
				</Text>
				<View className='flex flex-row justify-start items-center'>
					<StarRating card={marker} />
				</View>

				<Text numberOfLines={2} className='text-[12px] text-[#444] '>
					{marker.description}
				</Text>
			</View>
		</View>
	)
}

export default Card
