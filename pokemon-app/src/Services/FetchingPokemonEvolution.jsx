import axios from 'axios';

const FetchingPokemonEvolution = async ({queryKey}) => {
    const evolu_chain_id = queryKey[1];
    
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${evolu_chain_id}`);
        console.log("response for pokemon's evolution chain: ", response.data);
        return response.data; // axios automatically handles JSON parsing
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error(`Couldn't find this Pokemon's evolution chain`);
    }
}

export default FetchingPokemonEvolution;