import React from 'react'
import { Image, Text } from 'react-native'

const StarRating = ({ card }) => {
	return (
		<>
			{card.ratings ? (
				<>
					{[...Array(card.ratings)].map(val => (
						<Image
							className='mx-[5px] h-[25px] w-[25px]'
							source={require('../../assets/images/star.png')}
						/>
					))}
					{[...Array(5 - card.ratings)].map(val => (
						<Image
							className='mx-[5px] h-[25px] w-[25px]'
							source={require('../../assets/images/star_empty.png')}
						/>
					))}
				</>
			) : (
				<Text>Нет отзывов (0)</Text>
			)}
			{card.reviews && <Text>({card.reviews})</Text>}
		</>
	)
}

export default StarRating
