type Character = {
	name: string;
	image: string;
	species: string;
	status: string;
};

export const CharactersCard = ({ name, image, species, status }: Character) => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-2 bg-blue-400 rounded-md'>
			<h2 className='text-2xl font-bold text-center text-gray-800'>{name}</h2>
			<img
				src={image}
				alt={name}
				className='object-cover w-32 h-32 mx-auto rounded-full border-4 border-blue-600
                '
			/>
			<p className='text-md font-semibold text-center text-gray-700'>
				Species: {species}
			</p>
			<p
				className={`text-lg font-bold text-center ${
					status === 'Alive' ? 'text-green-600' : 'text-red-600'
				}`}
			>
				Status: {status}
			</p>
		</div>
	);
};
