import React from 'react'
import withPokemonAPI from './hocs/withPokemonAPI'

const Pokemon = ({ isFetching, data, setName, fetchPokemon }) => 
  <div>
    <label>
      Name: 
      <input name="name" placeholder="pikachu" onChange={ e => setName(e.target.value) } />
    </label>
    <button onClick={fetchPokemon}>Fetch</button>
    {
      isFetching && <p>Carregando...</p> 
    }
    {
      data && !isFetching ? (
        <div>
        <img src={data.sprites.front_default} alt="Pokemon"/>
        </div>
      ) : null
    }
  </div>

export default withPokemonAPI(Pokemon)
