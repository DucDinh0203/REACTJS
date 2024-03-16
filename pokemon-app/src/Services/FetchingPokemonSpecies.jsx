import axios from 'axios';

const FetchingPokemonSpecies = async ({queryKey}) => {
    const name = queryKey[1];

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        console.log("response data: ", response.data);
        return response.data; // axios automatically handles JSON parsing
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error(`Couldn't find this Pokemon ${name}`);
    }
}

export default FetchingPokemonSpecies;