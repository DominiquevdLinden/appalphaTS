import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="My baby is so cute" />
        <Pokemon
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <Pokemon
          name="Mewtwo"
          weight={122}
          awesome={true}
          terrifying={true}
          abilities={["Intimidate", "Unnerve"]}
        />
      </main>
    </div>
  );
}

export default App;
