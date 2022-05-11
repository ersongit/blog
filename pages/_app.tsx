import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../template/Header'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className="container">
			<Header />
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp