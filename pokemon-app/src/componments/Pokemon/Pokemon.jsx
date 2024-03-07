import {Link} from "react-router-dom";

const Pokemon = (props) => {
    const { name, types, id } = props

    const ImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    
    const formatPokemonID = (idNum) => {
        if (idNum <10) return `#00${id}`;
        else if (idNum >= 10 && idNum <= 99) return `#0${idNum}`;
        else return `#${idNum}`;
    }

    const displayPokemonType = (pokemonTypes) => {
        console.log("diplay pokemon type: ");
        return pokemonTypes.map((types, index) => {
            // const iconUrl = require(`../../asset/pokemonTypesIcons/${types.type.name}.svg`).default;
            return (
                <button 
                    key={index}
                    className={`${types.type.name} type-button`}
                >
                    {/* <img src={iconUrl} alt={types.type.name}/> */}
                    {types.type.name}
                </button>
            );
        });
    }
    
    return (
        <Link to={`/details/${name}`} className="pokemon-link">
            <div className="pokemon-container">
                <div className="image-container">
                    <img src={ImgUrl} alt={name}/>
                </div>
                <div className="pokemon-info">
                    <h2 className="pokemon-id"><i>{formatPokemonID(id)}</i></h2>
                    <h1 className="pokemon-name">{name}</h1>
                    <div className="pokemon-type">
                        <div>{displayPokemonType(types)}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Pokemon;