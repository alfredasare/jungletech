import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import RootProvider from '../context/RootProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootProvider>
			<>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</>
		</RootProvider>
	);
}
export default MyApp;
