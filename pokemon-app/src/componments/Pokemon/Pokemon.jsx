const Pokemon = (props) => {
    const { name, types, id, height, weight } = props

    const ImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    
    const formatPokemonID = (idNum) => {
        if (idNum <10) return `#00${id}`;
        else if (idNum >= 10 && idNum <= 99) return `#0${idNum}`;
        else return `#${idNum}`;
    }
    
    return (
        <div className="pokemon-container">
            <div className="image-container">
                <img src={ImgUrl} alt={name}/>
            </div>
            <div className="pokemon-info">
                <h2 className="pokemon-id"><i>{formatPokemonID(id)}</i></h2>
                <h1 className="pokemon-name">{name}</h1>
                <div className="pokemon-type">
                    {console.log("types: ", types)}
                </div>
                {/* <p>{`${height} --- ${weight}`}</p> */}
            </div>
            
            
            
        </div>
    );
};

export default Pokemon;