import React, { useEffect, useState } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import data from '../../../data'
import CardList from '../../components/Map/CardList'
import Search from '../../components/Map/Search'

export default function MapScreen() {
	const [location, setLocation] = useState({
		latitude: 62.025461,
		longitude: 129.705475,
	})
	const LATITUDE_DELTA = 23.0295
	const LONGITUDE_DELTA = 34.0388
	const [markers, setMarkers] = useState([])

	let mapAnimation = new Animated.Value(0)

	const region = {
		latitude: 64.0042, // средняя широта Якутии
		longitude: 129.7325, // средняя долгота Якутии
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	}

	useEffect(() => {
		setMarkers(data)
	}, [])

	return (
		<View className='flex-1 bg-[#fff] items-center justify-center relative'>
			<MapView className='h-full w-full' initialRegion={region}>
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
								<Image source={marker.img} className='w-[120px] h-[80px]' />
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>
			<Search />

			<CardList data={data} mapAnimation={mapAnimation} />
		</View>
	)
}
