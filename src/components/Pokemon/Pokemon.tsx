import React from "react";
import "./Pokemon.scss";

type Props = {
  name: string;
  weight: number;
  awesome: boolean;
  terrifying: boolean;
  abilities: string[];
};

export default function Pokemon(props: Props) {
  return (
    <div className="card shadow-sm mb-4 Pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          Awesome: {props.awesome ? "An awesome pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} Abilities:
        </p>
        <div>
          <ul className="list-group list-group-flush">
            {props.abilities.map((abil) => {
              return <li className="list-group-item">{abil}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
