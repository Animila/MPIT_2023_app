import React from 'react'
import { Image, Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'

const Map = ({ region, markers, mapViewRef }) => {
	return (
		<MapView
			ref={mapViewRef}
			style={{ height: '100%', width: '100%' }}
			initialRegion={region}
		>
			{markers.map((marker, index) => (
				<Marker
					key={index}
					coordinate={{
						latitude: parseFloat(marker.latitude),
						longitude: parseFloat(marker.longitude),
					}}
					title={marker.title}
				>
					<Callout>
						<View className='self-start flex-row width-[150px] p-[15px]'>
							<Text>{marker.title}</Text>
							<Image
								source={{ uri: marker.url }}
								className='w-[120px] h-[80px]'
							/>
						</View>
					</Callout>
				</Marker>
			))}
		</MapView>
	)
}

export default Map
