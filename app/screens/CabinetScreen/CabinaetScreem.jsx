import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import {
	Image,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../hooks/useAuth'

const CabinaetScreem = () => {
	const { logout } = useAuth()
	const [data, setData] = useState({})

	useEffect(() => {
		const getUserData = async () => {
			const user = await AsyncStorage.getItem('user')
			if (user) {
				setData(JSON.parse(user))
			}
		}
		getUserData()
	}, [])

	const saveUserData = async () => {
		await AsyncStorage.setItem('user', JSON.stringify(data))
	}
	return (
		<SafeAreaView>
			<View>
				<Text className='text-btn text-[36px] font-sans-bold text-center mt-[9px]'>
					Личный кабинет
				</Text>
			</View>
			<View className='justify-centers items-center'>
				<Image
					source={{
						uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
					}}
					className='rounded-full w-[200px] h-[200px] mb-[20px] mt-[20px]'
				/>
			</View>
			<View className='mx-[16px]'>
				<TextInput
					className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px]'
					placeholder='Имя'
					value={data.firstName}
					onChange={event =>
						setData({ ...data, firstName: event.nativeEvent.text })
					}
				/>
				<TextInput
					className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[10px]'
					placeholder='Фамилия'
					value={data.lastName}
					onChange={event =>
						setData({ ...data, lastName: event.nativeEvent.text })
					}
				/>
				<TextInput
					className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[10px]'
					placeholder='Телефон'
					value={data.tel}
					onChange={event => setData({ ...data, tel: event.nativeEvent.text })}
				/>
				<View className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[10px] flex flex-row items-center justify-between pr-[60px]'>
					<Text>Посещено баз</Text>
					<Text>{data.base}</Text>
				</View>
				<View className='w-full h-[48px] border-extra_3 border-[1px] rounded-[10px] pl-[14px] text-[15px] mt-[10px] flex flex-row items-center justify-between pr-[60px]'>
					<Text>TourTrip Coin</Text>
					<Text>{data.coin}</Text>
				</View>
				<TouchableWithoutFeedback
					onPress={() => {
						logout
					}}
				>
					<View className='min-h-[56px] w-full mt-[30px] justify-center items-center bg-btn rounded-[10px] '>
						<Text className='text-white text-center '>Выйти</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</SafeAreaView>
	)
}

export default CabinaetScreem
