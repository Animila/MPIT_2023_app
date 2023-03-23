import React from 'react'
import { Image, Text } from 'react-native'

const StarRating = props => {
	return (
		<>
			{[...Array(props.card.rating)].map(() => (
				<>
					<Image
						className='mx-[5px] h-[25px] w-[25px]'
						source={require('../../assets/images/star.png')}
					/>
				</>
			))}
			{props.card.rating < 5 &&
				[...Array(5 - props.card.rating)].map(() => (
					<>
						<Image
							className='mx-[5px] h-[25px] w-[25px]'
							source={require('../../assets/images/star_empty.png')}
						/>
					</>
				))}
			{props.card.reviews && <Text>({props.card.reviews})</Text>}
		</>
	)
}

export default StarRating
