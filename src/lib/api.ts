import axios from 'axios'

export const trunk = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})
