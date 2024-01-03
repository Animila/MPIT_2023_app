import axios from 'axios'

export const PlaceService = {
	async getAll() {
		// axios.defaults.headers.common['Authorization'] =
		// 	'Bearer 2|4fWyyxwCEpyj6FPVfJZQvHXbDJpi33XsZQKMpxDl'
		const response = await axios.get('https://hackaton-yakse.ru/api/v1/bases')
		console.log(response.data)
		return response.data
	},
}
