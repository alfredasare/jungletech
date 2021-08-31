import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import OurWork from '../components/our-work/ourWork';
import About from '../components/about/about';
import Mission from '../components/mission/mission';
import WhyUs from '../components/why-us/whyUs';
import Landing from '../components/landing/landing';
import Contact from '../components/contact/contact';

const Home: NextPage = () => {
	return (
		<Layout title='JungleTech - Hire top talent from around the world'>
			<Landing />
			<About />
			<Mission />
			<OurWork />
			<WhyUs />
			<Contact />
		</Layout>
	);
};

export default Home;
