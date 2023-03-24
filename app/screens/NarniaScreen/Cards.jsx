import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SwipeCards from 'react-native-swipe-cards'
import Card from '../../components/Card'

const Cards = props => {
	const [cards, setCards] = useState([
		{
			id: 1,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			price: '4500',
			bonus: 50,
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 3,
		},
		{
			id: 2,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			bonus: 120,
			price: '4500',
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 2,
		},
		{
			id: 2,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			price: '4500',
			bonus: 50,
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 5,
		},
		{
			id: 2,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			price: '4500',
			bonus: 290,
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 1,
		},
		{
			id: 2,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			price: '4500',
			bonus: 500,
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 3,
		},
		{
			id: 2,
			title: 'Глэмпинг “Берег Легенд”',
			place: 'Республика Саха с. Булгунняхтах',
			countPeople: 3,
			price: '4500',
			bonus: 345,
			src: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/188927/1779752.jpg',
			rating: 3,
		},
	])

	const handleYup = card => {}

	const handleNope = card => {
		// Alert.alert(card.place)
	}

	return (
		<SwipeCards
			cards={cards}
			renderCard={cardData => <Card card={cardData} />}
			renderNoMoreCards={() => (
				<View className='flex flex- col justify-center items-center w-screen h-screen'>
					<Text>Конец карточек</Text>
				</View>
			)}
			handleYup={handleYup}
			handleNope={handleNope}
			useNativeDriver={true}
		/>
	)
}

export default Cards
