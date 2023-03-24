import React from 'react'
import { TextInput, View } from 'react-native'

const Search = () => {
	return (
		<View
			className='absolute top-[20px] mt-[30px] flex-row bg-[#fff] w-[90%] self-center p-[10] shadow-[#ccc] rounded-[10px] pl-3 py-1'
			style={{
				shadowOffset: 'width: 0, height: 3',
				shadowOpacity: 0.5,
				shadowRadius: 5,
				elevation: 10,
			}}
		>
			<TextInput
				placeholder='Поиск'
				placeholderTextColor='#000'
				autoCapitalize='none'
				style={{ flex: 1, padding: 0 }}
			/>
		</View>
	)
}

export default Search
