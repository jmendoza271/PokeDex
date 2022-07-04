import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import RetrievePokemon from "../services/PokemonRetriever";
import PokeCell from "./poketable/PokeCell";

function PokemonPopulator() {
  const pokeData = RetrievePokemon();
  console.log(pokeData);
  return (
    <div>
      <Row>
        {pokeData.map((currentPoke, index) => {
          return (
            <PokeCell
              id={currentPoke["id"]}
              sprite={currentPoke["sprites"]["front_default"]}
              name={currentPoke["name"]}
              type={currentPoke["types"][0]["type"]["name"]}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default PokemonPopulator;
