const ImageGrid = () => {
	return (
		<div>
			<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
				<img
					src='images/developer.jpg'
					alt='Developer on phone call.'
					className='w-full h-full object-center object-cover'
				/>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8'>
				<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
					<img
						src='images/ui-designer.jpg'
						alt='3 developers collaborating.'
						className='w-full h-full object-center object-cover'
					/>
				</div>
				<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
					<img
						src='images/lagos-techie.jpg'
						alt='Woman explaining something to fellow worker.'
						className='w-full h-full object-center object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default ImageGrid;
