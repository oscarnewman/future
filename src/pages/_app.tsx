import { useRouteProgressBar } from '@/hooks/useRouteProgressBar'
import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import { QueryClient } from 'react-query'

function MyApp({ Component, pageProps }) {
	useRouteProgressBar()

	return <Component {...pageProps} />
}

export default MyApp
