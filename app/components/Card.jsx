import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const Card = ({ card }) => {
	return (
		<View className='flex-col justify-start items-start '>
			<View className='bg-winter_5 w-fit min-h-[625px] mx-[8px] rounded-xl'>
				<View className='relative'>
					<Image
						className='h-[352px] rounded-xl'
						source={{ uri: card.src }}
						style={{ boxShadow: 'inset 0px -78px 4px rgba(0, 0, 0, 0.25)' }}
					/>
					<Text className='text-button font-sans-bold text-[22px] absolute bottom-[20px] left-[9px] text-white whitespace-nowrap overflow-ellipsis'>
						{card.title}
					</Text>
				</View>

				<View className='px-auto' pointerEvents='none'>
					<TextInput className='h-[31px] rounded-[21px] px-[20px] text-[16px] text-winter_2 mt-[14px] mx-[3px] bg-white text-center'>
						{card.place}
					</TextInput>
				</View>
				<View className='px-auto' pointerEvents='none'>
					<TextInput className='h-[31px] rounded-[21px] px-[10px] text-[16px] text-winter_2 mt-[14px] mx-[3px] bg-white text-center'>
						<Text className='text-winter_1'>{card.countPeople}</Text>
						<Text> варианта размещения</Text>
					</TextInput>
				</View>
				<View className='flex flex-row justify-around mt-[21px]'>
					<View className='' pointerEvents='none'>
						<TextInput className='h-[50px] rounded-[21px] w-[160px] bg-white text-center text-winter_2'>
							<Text>от </Text>
							<Text className='text-winter_1'>{card.price}</Text>
							<Text> ₽/сутки</Text>
						</TextInput>
					</View>
					<View className='' pointerEvents='none'>
						<TextInput className='h-[50px] w-[160px] rounded-[21px] text-center bg-white text-winter_2'>
							<Text>+ </Text>
							<Text className='text-winter_1'>{card.bonus}</Text>
							<Text> балла</Text>
						</TextInput>
					</View>
				</View>
				<View className='px-auto' pointerEvents='none'>
					<View className='h-[65px] rounded-[21px] px-[10px] text-[16px] text-winter_2 mt-[14px] mx-[3px] bg-white text-center flex flex-row justify-center items-center'>
						{[...Array(card.rating)].map(() => (
							<>
								<Image
									className='mx-[5px]'
									source={require('../../assets/images/star.png')}
								/>
							</>
						))}
						{card.rating < 5 &&
							[...Array(5 - card.rating)].map(() => (
								<>
									<Image
										className='mx-[5px]'
										source={require('../../assets/images/star_empty.png')}
									/>
								</>
							))}
					</View>
				</View>
			</View>
		</View>
	)
}

export default Card
