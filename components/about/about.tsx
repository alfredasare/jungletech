const About = () => {
	return (
		<>
			{/* Testimonial/stats section */}
			<div className='relative mt-32 sm:mt-64 md:mt-20'>
				<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>
					<div className='relative sm:py-16 lg:py-0'>
						<div
							aria-hidden='true'
							className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
						>
							<div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72' />
							<svg
								className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
								width={404}
								height={392}
								fill='none'
								viewBox='0 0 404 392'
							>
								<defs>
									<pattern
										id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits='userSpaceOnUse'
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className='text-gray-200'
											fill='currentColor'
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
								/>
							</svg>
						</div>
						<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
							{/* Testimonial card*/}
							<div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
								<img
									className='absolute inset-0 h-full w-full object-cover'
									src='https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100'
									alt=''
								/>
								<div className='absolute inset-0 bg-cyan-500 mix-blend-multiply' />
								<div className='absolute inset-0 bg-gradient-to-t from-cyan-600 via-cyan-600 opacity-90' />
								<div className='relative px-8'>
									<div>
										<img
											className='h-12'
											src='https://tailwindui.com/img/logos/workcation.svg?color=white'
											alt='JungleTech'
										/>
									</div>
									<blockquote className='mt-8'>
										<div className='relative text-lg font-medium text-white md:flex-grow'>
											<svg
												className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-cyan-400 opacity-25'
												fill='currentColor'
												viewBox='0 0 32 32'
												aria-hidden='true'
											>
												<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
											</svg>
											<p className='relative'>
												Tincidunt integer commodo,
												cursus etiam aliquam neque, et.
												Consectetur pretium in volutpat,
												diam. Montes, magna cursus nulla
												feugiat dignissim id lobortis
												amet.
											</p>
										</div>

										<footer className='mt-4'>
											<p className='text-base font-semibold text-cyan-200'>
												Sarah Williams, CEO at
												Workcation
											</p>
										</footer>
									</blockquote>
								</div>
							</div>
						</div>
					</div>

					<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
						{/* Content area */}
						<div className='pt-12 sm:pt-16 lg:pt-0'>
							<h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
								On a mission to empower teams
							</h2>
							<div className='mt-6 text-gray-500 space-y-6'>
								<p className='text-lg'>
									AfroTechno is an IT services company
									specializing in software development
									outsourcing.
								</p>
								<p className='text-base leading-7'>
									With over 20 years experience in the IT
									space in Europe, Middle East and Africa, our
									team brings a wealth of experience in
									providing top notch services for government
									agencies, insurance, healthcare,
									manufacturing, education, financial, and
									more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
