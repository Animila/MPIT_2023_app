import * as Font from 'expo-font'
import { Text } from 'react-native'
Font.loadAsync({
	'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
	'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
})

export default function App() {
	return <Text>Тест</Text>
}
