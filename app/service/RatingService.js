import axios from 'axios'

const data = [
	{
		id: 1,
		id_base: 1,
		id_user: 1,
		rating: 5,
		created_at: '2023-03-24T03:11:59.000000Z',
		updated_at: '2023-03-24T03:11:59.000000Z',
	},
	{
		id: 2,
		id_base: 2,
		id_user: 1,
		rating: 5,
		created_at: '2023-03-24T03:12:07.000000Z',
		updated_at: '2023-03-24T03:12:07.000000Z',
	},
	{
		id: 3,
		id_base: 3,
		id_user: 1,
		rating: 5,
		created_at: '2023-03-24T03:12:10.000000Z',
		updated_at: '2023-03-24T03:12:10.000000Z',
	},
	{
		id: 4,
		id_base: 4,
		id_user: 1,
		rating: 5,
		created_at: '2023-03-24T03:12:13.000000Z',
		updated_at: '2023-03-24T03:12:13.000000Z',
	},
	{
		id: 5,
		id_base: 5,
		id_user: 1,
		rating: 5,
		created_at: '2023-03-24T03:12:15.000000Z',
		updated_at: '2023-03-24T03:12:15.000000Z',
	},
	{
		id: 6,
		id_base: 1,
		id_user: 1,
		rating: 2,
		created_at: '2023-03-24T03:12:25.000000Z',
		updated_at: '2023-03-24T03:12:25.000000Z',
	},
	{
		id: 7,
		id_base: 4,
		id_user: 1,
		rating: 2,
		created_at: '2023-03-24T03:12:27.000000Z',
		updated_at: '2023-03-24T03:12:27.000000Z',
	},
	{
		id: 8,
		id_base: 3,
		id_user: 1,
		rating: 4,
		created_at: '2023-03-24T03:12:33.000000Z',
		updated_at: '2023-03-24T03:12:33.000000Z',
	},
	{
		id: 9,
		id_base: 5,
		id_user: 1,
		rating: 4,
		created_at: '2023-03-24T03:12:36.000000Z',
		updated_at: '2023-03-24T03:12:36.000000Z',
	},
	{
		id: 10,
		id_base: 1,
		id_user: 1,
		rating: 1,
		created_at: '2023-03-24T03:12:40.000000Z',
		updated_at: '2023-03-24T03:12:40.000000Z',
	},
]

export const RatingService = {
	async getForPlace(id) {
		axios.defaults.headers.common['Authorization'] =
			'Bearer 2|4fWyyxwCEpyj6FPVfJZQvHXbDJpi33XsZQKMpxDl'
		// const response = await axios.get('https://hackaton-yakse.ru/api/rating/get')
		// 	.data
		const filter_response = data.filter(base => base['id_base'] === id)

		return filter_response
	},
}
