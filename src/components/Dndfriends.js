import React from "react";

export default function Dndfriends(props) {
  return (
    <div>
      <h2>Character name: {props.name}</h2>
      <p>Race: {props.race}</p>
      <p>Class: {props.class}</p>
      <p>Weight: {props.weight}</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities:
      </p>
      <ul>
        {props.abilities.map(ability => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
