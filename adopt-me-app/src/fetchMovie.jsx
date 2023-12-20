const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`https://api.sampleapis.com/movies/`);
  
    if (!apiRes.ok) {
      throw new Error(`details/${id} fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchPet;