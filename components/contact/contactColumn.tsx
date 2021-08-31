import type { FC } from 'react';

interface IProps {
	heading: string;
	paragraph: string;
}

const ContactColumn: FC<IProps> = ({ heading, paragraph, children }) => {
	return (
		<>
			<h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl'>
				{heading}
			</h2>
			<div className='mt-3'>
				<p className='text-lg text-gray-500'>{paragraph}</p>
			</div>
			<div className='mt-9'>{children}</div>
		</>
	);
};

export default ContactColumn;
