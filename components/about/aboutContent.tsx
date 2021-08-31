import type { FC } from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { aboutContentVariant } from '../../animations/about';

interface IProps {
	inView: boolean;
}

const AboutContent: FC<IProps> = ({ inView }) => {
	const aboutContentControls = useAnimation();

	useEffect(() => {
		if (inView) {
			aboutContentControls.start('visible');
		}
	}, [inView, aboutContentControls]);

	return (
		<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
			<motion.div
				className='pt-12 sm:pt-16 lg:pt-0'
				initial='hidden'
				animate={aboutContentControls}
				variants={aboutContentVariant}
			>
				<h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
					On a mission to empower clients
				</h2>
				<div className='mt-6 text-gray-500 space-y-6'>
					<p className='text-lg'>
						JungleTech is an IT services company specializing in
						software development outsourcing.
					</p>
					<p className='text-lg leading-7'>
						With over 20 years experience in the IT space in Europe,
						Middle East and Africa, our team brings a wealth of
						experience in providing top notch services for
						government agencies, insurance, healthcare,
						manufacturing, education, financial, and more.
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default AboutContent;
