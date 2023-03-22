import * as Font from 'expo-font'
import { TailwindProvider } from 'tailwindcss-react-native'
import LauncherScreen from './app/screens/LauncherScreen'
Font.loadAsync({
	'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
})

export default function App() {
	return (
		<TailwindProvider>
			<LauncherScreen />
		</TailwindProvider>
	)
}
