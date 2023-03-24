import React from 'react'
import { Animated } from 'react-native'
import Card from './Card'

const CardList = ({ data, mapAnimation }) => {
	return (
		<>
			<Animated.ScrollView
				useNativeDriver={true}
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
					<Card marker={marker} key={index} />
				))}
			</Animated.ScrollView>
		</>
	)
}

export default CardList
