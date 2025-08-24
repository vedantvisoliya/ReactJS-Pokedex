import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export default function SideNav() {
    const [ searchValue, setSearchValue ] = useState("");

    const filteredPokemon = first151Pokemon.filter((elem, elemIndex) => {
        if (getFullPokedexNumber(elemIndex).includes(searchValue)) {
            return true;
        }

        if (elem.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
            return true;
        }

        return false;
    });

    return (
        <nav>
            <div className="header">
                <h1 className="text-gradient">Pokédex</h1>
            </div>

            <input type="text" placeholder="E.g 001 or Bulbasaur" value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value);
            }}/>

            {
                filteredPokemon.map((pokemon, pokemonIndex) => {
                    return (
                        <button key={pokemonIndex} className="nav-card ">
                            <p>
                                {getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}
                            </p>
                            <p>
                                {pokemon}
                            </p>
                        </button>
                    )   
                })
            }
        </nav>
    )
}