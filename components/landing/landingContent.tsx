const LandingContent = () => {
	return (
		<div className='mx-auto max-w-md w-11/12 px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
			<div className='lg:pb-24 lg:pt-24'>
				<h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
					<span className='block'>A better way to</span>
					<span className='pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5'>
						build web apps
					</span>
				</h1>
				<p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
					Reach out and connect with us to access our rich and
					unlimited pool of resources and developers to build your
					apps.
				</p>
				<div className='mt-10 sm:mt-12'>
					<div className='sm:max-w-xl sm:mx-auto lg:mx-0'>
						<div className='sm:flex sm:justify-center lg:justify-start'>
							<div className='mt-3 sm:mt-0'>
								<button
									type='submit'
									className='block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
								>
									Get started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingContent;
