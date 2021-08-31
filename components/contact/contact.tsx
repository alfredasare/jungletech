import ContactColumn from './contactColumn';
import EmailPhone from './emailPhone';
import OfficeLocation from './officeLocation';

const Contact = () => {
	return (
		<div className='bg-white'>
			<div className='max-w-7xl mx-auto pt-8 pb-16 px-4 sm:pt-0 md:pt-16 sm:px-6 lg:px-8'>
				<div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
					<div>
						<ContactColumn
							heading='Reach out to us'
							paragraph="Whether you have any more questions or you'd like to
							engage our services right away, we'd love to hear from you.
							Send us a quick email or give us a phone call."
						>
							<EmailPhone />
						</ContactColumn>
					</div>
					<div className='mt-12 sm:mt-16 md:mt-0'>
						<ContactColumn
							heading='Our office'
							paragraph="You can visit our office if you prefer an in-person meeting.
							We currently have one office in Accra, Ghana. Do feel free to
							visit us. It'd be a pleasure to have you."
						>
							<OfficeLocation />
						</ContactColumn>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
