import { useQuery } from '@tanstack/react-query';

interface CharacterProps {
	id: number;
	name: string;
}

export const Characters = () => {
	const getCharacters = async () => {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		return res.json();
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['characters'],
		queryFn: getCharacters,
	});

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error</p>;

	return (
		<ul>
			{data?.results.map(({ id, name }: CharacterProps) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};
