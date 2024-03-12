import axios from 'axios';

const FetchingPokemonData = async ({queryKey}) => {
    const name = queryKey[1];

    console.log("name in fetching: " + name);

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log("response data: ", response.data);
        return response.data; // axios automatically handles JSON parsing
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw new Error(`Couldn't find this Pokemon ${name}`);
    }
}

export default FetchingPokemonData

// const fetchingPokemonByName = async () => {
  //   try{
  //     const requestPokemonData = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/${name}`
  //     );
      
  //   } catch (error) {
  //       console.log("failed to fetch this pokemon data: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchingPokemonByName();
  // }, []);