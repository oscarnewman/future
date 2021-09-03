import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		smoothscroll.polyfill()
	})
	useRouteProgressBar()

	return <Component {...pageProps} />
}

export default MyApp
