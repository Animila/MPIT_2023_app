import React, { useEffect, useState } from 'react'
import { Animated, Text, View } from 'react-native'
import CardList from '../../components/Map/CardList'
import Map from '../../components/Map/Map'
import Search from '../../components/Map/Search'
import { PlaceService } from '../../service/PlaceService'
import { RatingService } from '../../service/RatingService'

export default function MapScreen() {
	const LATITUDE_DELTA = 0.014
	const LONGITUDE_DELTA = 5.019
	const [markers, setMarkers] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const mapViewRef = React.createRef()
	let mapAnimation = new Animated.Value(0)

	const handleCardPress = marker => {
		mapViewRef.current.animateToRegion(
			{
				latitude: marker.latitude,
				longitude: marker.longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			},
			1000
		)
	}

	const region = {
		latitude: 62.027216, // Широта г. Якутск
		longitude: 129.732086,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	}

	const getRating = ratings => {
		if (!ratings || !ratings.length) {
			return 0
		}
		const sum = ratings.reduce((acc, cur) => acc + cur, 0)
		const average = sum / ratings.length
		const result = parseInt(Math.round(average * 10) / 10)
		console.log(result)

		return result
	}

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const base = await PlaceService.getAll()

			const ratingPromises = base.map(item =>
				RatingService.getForPlace(item.id)
			)
			const ratingsArrays = await Promise.all(ratingPromises)
			const ratings = ratingsArrays.map(arr => arr.map(r => r.rating))

			const markedBase = base.map((item, index) => ({
				...item,
				reviews: ratings[index].length,
				ratings: getRating(ratings[index]),
			}))
			setMarkers(markedBase)
			setIsLoading(false)
		}
		fetchData()
	}, [])

	return (
		<View className='flex-1 bg-[#fff] items-center justify-center relative'>
			{!isLoading ? (
				<>
					<Map mapViewRef={mapViewRef} region={region} markers={markers} />
					<CardList data={markers} mapAnimation={mapAnimation} />
				</>
			) : (
				<Text>Загрузка данных</Text>
			)}
			<Search />
		</View>
	)
}
