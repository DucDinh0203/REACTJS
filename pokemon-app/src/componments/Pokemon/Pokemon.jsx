const Pokemon = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.height}</h2>
            <h2>{props.weight}</h2>
        </div>
    );
};

export default Pokemon;