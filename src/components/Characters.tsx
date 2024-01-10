import { useQuery } from '@tanstack/react-query';
import { CharactersCard } from './CharactersCard';

interface CharacterProps {
	id: number;
	name: string;
	image: string;
	species: string;
	status: string;
}

export const Characters = () => {
	const getCharacters = async () => {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		return res.json();
	};

	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['characters'],
		queryFn: getCharacters,
	});

	if (isLoading) return <p>Loading...</p>;
	if (!isSuccess) return <p>Error</p>;

	return (
		data && (
			<ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10'>
				{data?.results.map(
					({ id, name, image, species, status }: CharacterProps) => (
						<li
							key={id}
							className='flex flex-col items-center justify-center w-full h-full p-2 bg-blue-700 rounded-md'
						>
							<CharactersCard
								name={name}
								image={image}
								species={species}
								status={status}
							/>
						</li>
					),
				)}
			</ul>
		)
	);
};
