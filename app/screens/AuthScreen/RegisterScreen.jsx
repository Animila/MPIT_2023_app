import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const RegisterModal = ({ data, setData }) => {
	return (
		<View className='w-full'>
			<View className='flex flex-col justify-start items-center mt-[28px]'>
				<Image
					className='mt-[23px] w-[165px] h-[122px]'
					source={require('../../../assets/images/logo.png')}
				/>
				<Text className='text-button text-center text-[36px] mt-[23px] font-bold text-sun_1'>
					Регистрация
				</Text>
			</View>
			<TextInput
				className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] border-sun_3 placeholder:text-sun_4 mt-[23px]'
				placeholder='Имя'
				keyboardType='default'
				inputMode='text'
				secureTextEntry={true}
				value={data.firstName}
				onChange={event =>
					setData({ ...data, firstName: event.nativeEvent.text })
				}
			/>
			<TextInput
				className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[15px] border-sun_3 placeholder:text-sun_4'
				placeholder='Фамилия'
				keyboardType='default'
				inputMode='text'
				secureTextEntry={true}
				value={data.lastName}
				onChange={event =>
					setData({ ...data, lastName: event.nativeEvent.text })
				}
			/>
			<TextInput
				className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] mt-[15px] text-[15px] border-sun_3 placeholder:text-sun_4'
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

export default RegisterModal
