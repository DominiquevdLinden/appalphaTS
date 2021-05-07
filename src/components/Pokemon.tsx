import React from "react";

type Props = {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[];
};

export default function Pokemon(props: Props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "Yes!" : "nope"}</p>
      <p>Terrifying: {props.terrifying ? "Yes!" : "nope"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}
