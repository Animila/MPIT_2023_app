import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Alert } from 'react-native'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoadingInitial, setIsLoadingInitial] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// проверка что пользователь авторизован
		const bootstrapAsync = async () => {
			const apiKey = await AsyncStorage.getItem('apiKey')
			axios.defaults.baseURL = 'https://api.hackaton-yakse.ru/api'

			try {
				if (apiKey) {
					authHandler(apiKey)
				}
			} catch (e) {
				Alert.alert('Ошибка при загрузке профиля: ', e.message)
			} finally {
				setIsLoadingInitial(false)
			}
		}

		bootstrapAsync()
	}, [])

	const registerHandler = async (firstName, lastName, tel, password) => {
		axios.defaults.baseURL = 'https://api.hackaton-yakse.ru/api'
		setIsLoading(true)
		try {
			const response = await axios.post('/register', {
				firstName,
				lastName,
				tel,
				password,
			})
			const apiKey = response.data.token
			await AsyncStorage.setItem('apiKey', apiKey)
		} catch (error) {
			Alert.alert('Ошибка регистрации: ', error.message)
		} finally {
			setIsLoading(false)
		}
	}
	const loginHandler = async (email, password) => {
		axios.defaults.baseURL = 'https://api.hackaton-yakse.ru/api'
		setIsLoading(true)
		try {
			const response = await axios.post('/login', { email, password })
			const apiKey = response.data.token
			await AsyncStorage.setItem('apiKey', apiKey)
		} catch (error) {
			Alert.alert('Ошибка авторизации: ', error.message)
		} finally {
			setIsLoading(false)
		}
	}

	const logoutHandler = async () => {
		setIsLoading(true)
		try {
			await AsyncStorage.removeItem('apiKey')
			setUser(null)
		} catch (error) {
			Alert.alert('Ошибка при выходе: ', error.message)
		} finally {
			setIsLoading(false)
		}
	}

	const authHandler = async apiKey => {
		axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`

		try {
			const getUser = await axios.get('/user', { apiKey })
			setUser(getUser.data)
			setIsLoadingInitial(false)
		} catch (error) {
			Alert.alert('Ошибка при загрузке профиля: ', error.message)
		}
	}

	const value = useMemo(() => {
		return {
			user,
			isLoading,
			login: loginHandler,
			logout: logoutHandler,
			register: registerHandler,
		}
	}, [user, isLoading])

	if (isLoadingInitial) {
		return null
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
