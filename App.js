import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import { TailwindProvider } from 'tailwindcss-react-native'
import { AuthProvider } from './app/providers/AuthProvider'
import AuthScreen from './app/screens/AuthScreen/AuthScreen'
import LauncherScreen from './app/screens/LauncherScreen'
Font.loadAsync({
	'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
})

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<TailwindProvider>
			<NavigationContainer>
				<AuthProvider>
					<Stack.Navigator initialRouteName='AuthScreen'>
						<Stack.Screen
							options={{ headerShown: false }}
							name='Launcher'
							component={LauncherScreen}
						/>
						<Stack.Screen
							options={{ headerShown: false }}
							name='AuthScreen'
							component={AuthScreen}
						/>
					</Stack.Navigator>
				</AuthProvider>
			</NavigationContainer>
		</TailwindProvider>
	)
}
