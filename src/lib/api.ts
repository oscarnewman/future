import axios from 'axios'

export const trunk = axios.create({
	baseURL: process.env.API_URL,
})
