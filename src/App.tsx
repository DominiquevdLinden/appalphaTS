import React from "react";
import logo from "./logo.svg";
import "./style/global.scss";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="row">
          <Title content="Pokemon encyclopedia" />
          {all_pokemon.map((poke) => {
            return (
              <div className="col-md-6 col-lg-4">
                <Pokemon
                  name={poke.name}
                  weight={poke.weight}
                  awesome={poke.awesome}
                  terrifying={poke.terrifying}
                  abilities={poke.abilities}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
