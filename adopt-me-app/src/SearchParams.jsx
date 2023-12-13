import React, { useEffect, useState } from 'react'

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [pets, setPets] = useState([]);
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = [];

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log("json: " + JSON.stringify(json));
        setPets(json);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location 
                    <input
                        id="location"
                        value = {location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>

                <label htmlFor="animal">
                    Animal 
                    <select
                        id="animal"
                        value = {animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    >
                        <option/>
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    >
                        <option/>
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                            {breed}
                          </option>
                        ))}
                    </select>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams