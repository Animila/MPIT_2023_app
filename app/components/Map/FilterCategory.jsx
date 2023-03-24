import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

const FilterCategory = () => {
	const category = [
		{
			name: '10 км',
		},
		{
			name: '20 км',
		},
		{
			name: '30 км',
		},
		{
			name: '40 км',
		},
	]
	return (
		<ScrollView
			horizontal
			scrollEventThrottle={1}
			showsHorizontalScrollIndicator={false}
			height={50}
			className='absolute top-[100px] px-[10px]'
		>
			{category.map((cat, index) => (
				<TouchableOpacity
					key={index}
					className='flex flex-row bg-[#fff] rounded-[20px] p-2 px-[20px] mx-[10px] h-[35px] shadow-[#ccc] '
					style={{
						shadowOffset: 'width: 0, height: 3',
						shadowOpacity: 0.5,
						shadowRadius: 5,
						elevation: 10,
					}}
				>
					<Text>{cat.name}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	)
}

export default FilterCategory
