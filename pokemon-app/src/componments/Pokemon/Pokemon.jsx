const Pokemon = (props) => {
    return (
        <div>
            <p>{`${props.name} --- ${props.height} --- ${props.weight}`}</p>
        </div>
    );
};

export default Pokemon;