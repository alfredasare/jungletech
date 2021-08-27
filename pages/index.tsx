import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import OurWork from '../components/our-work/ourWork';
import About from '../components/about/about';
import Mission from '../components/mission/mission';
import WhyUs from '../components/why-us/whyUs';
import Landing from '../components/landing/landing';

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<Landing />
			<About />
			<Mission />
			<OurWork />
			<WhyUs />
		</Layout>
	);
};

export default Home;
