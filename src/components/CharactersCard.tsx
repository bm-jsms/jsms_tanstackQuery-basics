type Character = {
	name: string;
	image: string;
	species: string;
	status: string;
};

export const CharactersCard = ({ name, image, species, status }: Character) => {
	return (
		<div>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<p>Species: {species}</p>
			<p>Status: {status}</p>
		</div>
	);
};
