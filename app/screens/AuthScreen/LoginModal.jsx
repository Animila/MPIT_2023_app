import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const LoginModal = ({ data, setData }) => {
	return (
		<View className='w-full'>
			<View className='flex flex-col justify-start items-center mt-[28px]'>
				<Text className='text-button text-center text-[36px] font-bold text-sun_1'>
					Авторизация
				</Text>
				<Image
					className='mt-[50px]'
					source={require('../../../assets/images/logo.png')}
				/>
			</View>
			<TextInput
				className='w-full h-[48px] mt-[30px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] border-sun_3 placeholder:text-sun_4'
				placeholder='Телефон'
				inputMode='tel'
				value={data.tel}
				onChange={event => setData({ ...data, tel: event.nativeEvent.text })}
			/>
			<TextInput
				className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[15px] border-sun_3 placeholder:text-sun_4'
				placeholder='Пароль'
				keyboardType='default'
				inputMode='text'
				secureTextEntry={true}
				value={data.password}
				onChange={event =>
					setData({ ...data, password: event.nativeEvent.text })
				}
			/>
		</View>
	)
}

export default LoginModal
