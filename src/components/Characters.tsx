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
			<ul>
				{data?.results.map(
					({ id, name, image, species, status }: CharacterProps) => (
						<li key={id}>
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
