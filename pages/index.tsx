import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<h1 className='text-4xl'>JungleTech</h1>
		</Layout>
	);
};

export default Home;
