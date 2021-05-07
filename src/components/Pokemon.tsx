import React from "react";

// type Pokemon = {
//   name: string;
//   weight: number;
//   awesome: boolean;
//   terrifying: boolean;
//   whataboutnull: null;
//   andundefined: undefined;
// };

export default function Pokemon(/*pokemon: Pokemon */) {
  return (
    <div>
      <h2>Pokemon name: {"Charizard"}</h2>
      <p>Weight: {90} kg</p>
      <p>Awesome: {true}</p>
      <p>Terrifying: {false}</p>
      <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p>
      <p>Abilities: {["Blaze", "Solar power", "Tough claws", "Drought"]}</p>
    </div>
  );
}
