import axios from 'axios'

export const trunk = axios.create({
	withCredentials: true,
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})
