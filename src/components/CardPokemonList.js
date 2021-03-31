import React from 'react'
import { Link } from 'react-router-dom';
import './CardPokemonList.css'


function CardPokemonList({pokemon}) {
        return (
            <div className="Card--pl">
                <ul>
                <li>
                <div className="Card__img">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                </li>
                <li>
                <div className="Card__name">
                    {pokemon.name}
                </div>
                </li>
                <li>
                <div className="Card__moreinfo">
                    <Link to='/PokemonDetail'>More Detail</Link> 
                </div>
                </li>
                </ul>
            </div>
        
            )
}

export default CardPokemonList
