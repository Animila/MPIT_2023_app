import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../hooks/useAuth'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterScreen'

const AuthScreen = () => {
	const navigation = useNavigation()
	const { isLoading, login, register, user } = useAuth()
	const [isReg, setIsReg] = useState(false)
	const [data, setData] = useState({})

	const authHandler = async () => {
		const { firstName, lastName, tel, password } = data
		if (isReg) await register(firstName, lastName, tel, password, 1)
		else await login(tel, password)
		setData({})
		console.log(user)
		if (user) {
			navigation.replace('Home')
		} else {
			Alert.alert('ошибка')
		}
	}

	return (
		<>
			<SafeAreaView className='mx-[16px] justify-start items-center h-screen'>
				{isReg ? (
					<RegisterModal data={data} setData={setData} />
				) : (
					<LoginModal data={data} setData={setData} />
				)}

				<View className='w-full items-center self-end mt-[30px]'>
					<TouchableWithoutFeedback onPress={authHandler}>
						<View className='min-h-[56px] w-full justify-center items-center bg-button rounded-[10px] bg-sun_1'>
							<Text className=' text-white font-sans-bold text-center '>
								{isReg ? 'Создать' : 'Войти'}
							</Text>
						</View>
					</TouchableWithoutFeedback>

					{isReg ? (
						<>
							<TouchableWithoutFeedback onPress={() => setIsReg(!isReg)}>
								<Text className='text-sun_2 mt-[16px] text-[15px] underline'>
									Есть аккаунт
								</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback>
								<Text className='text-sun_2 text-[15px] underline'>
									Войти как гость
								</Text>
							</TouchableWithoutFeedback>
						</>
					) : (
						<>
							<TouchableWithoutFeedback onPress={() => setIsReg(!isReg)}>
								<View className='min-h-[56px] mt-[10px] w-full justify-center items-center bg-button rounded-[10px] bg-sun_1'>
									<Text className=' text-white font-sans-bold text-center '>
										Зарегистрироваться
									</Text>
								</View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback>
								<Text className='text-sun_2 mt-[16px] text-[15px]'>
									Забыли пароль?
								</Text>
							</TouchableWithoutFeedback>
						</>
					)}
				</View>
			</SafeAreaView>
		</>
	)
}

export default AuthScreen
