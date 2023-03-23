import React, { useEffect, useState } from 'react'
import {
	Animated,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import data from '../../../data'
import StarRating from '../../components/StarRating'

export default function MapScreen() {
	const [location, setLocation] = useState({
		latitude: 62.025461,
		longitude: 129.705475,
	})
	const LATITUDE_DELTA = 23.0295
	const LONGITUDE_DELTA = 34.0388
	const [markers, setMarkers] = useState([])

	let mapIndex = 0
	let mapAnimation = new Animated.Value(0)

	const region = {
		latitude: 64.0042, // средняя широта Якутии
		longitude: 129.7325, // средняя долгота Якутии
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	}

	useEffect(() => {
		mapAnimation.addListener(({ value }) => {
			let index = Math.floor(value / 220 + 0.3)
			if (index >= markers.length) {
				index = markers.length - 1
			}
			if (index <= 0) {
				index = 0
			}

			clearTimeout(regionTimeout)

			const regionTimeout = setTimeout(() => {
				if (mapIndex != index) {
					mapIndex = index
					const { coordinate } = markers[index]
					_map.current.animateToRegion(
						{
							...coordinate,
							latitudeDelta: region.latitudeDelta,
							longitudeDelta: region.longitudeDelta,
						},
						350
					)
				}
			}, 10)
		})
	})

	const _map = React.useRef(null)

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

	useEffect(() => {
		setMarkers(data)
	}, [])

	return (
		<View className='flex-1 bg-[#fff] items-center justify-center relative'>
			<MapView ref={_map} className='h-full w-full' initialRegion={region}>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						coordinate={{
							latitude: marker.latitude,
							longitude: marker.longitude,
						}}
						title={marker.title}
					>
						<Callout>
							<View className='self-start flex-row width-[150px] p-[15px]'>
								<Text>{marker.title}</Text>
								<Image
									source={'/assets/images/4841.jpg'}
									className='w-[120px] h-[80px]'
								/>
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>
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
			<Animated.ScrollView
				horizontal
				scrollEventThrottle={1}
				showsHorizontalScrollIndicator={false}
				className='absolute bottom-0 left-0 right-0 py-[10px]'
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: {
									x: mapAnimation,
								},
							},
						},
					],
					{ useNativeDriver: true }
				)}
			>
				{data.map((marker, index) => (
					<View
						className='bg-[#fff] mx-[10px] shadow-[#000] h-[220px] w-[400px] overflow-hidden rounded-tl-lg'
						style={{
							shadowOffset: 'x: 2, y: -2',
							shadowOpacity: 0.3,
							shadowRadius: 5,
							elevation: 2,
						}}
						key={index}
					>
						<Image
							source={marker.img}
							className='flex-3 w-full h-[100px] self-center'
							resizeMode='cover'
						/>
						<View className='flex-2 p-[10px]'>
							<Text
								numberOfLines={1}
								className='text-[12px] font-sans-bold font-[700]'
							>
								{marker.title}
							</Text>
							<View className='flex flex-row justify-start items-center'>
								<StarRating card={marker} />
							</View>

							<Text numberOfLines={2} className='text-[12px] text-[#444] '>
								{marker.description}
							</Text>
						</View>
					</View>
				))}
			</Animated.ScrollView>
		</View>
	)
}
