import React from "react";

export default function Dndfriends(props) {
  return (
    <div className="card shadow-sm .mb-4 Dndfriends">
      <div className="cad-body .pb-0">
        <br />
        <h2 className="card-title">{props.name}</h2>
        <h3 className="card-subtitle .mb-3 text-info">
          Awesome: {props.awesome ? "YES!" : "nope, not really"}
        </h3>
        <br />
        <p className=".mb-0">Race: {props.race}</p>
        <p>Class: {props.class}</p>
        <p>Weight: {props.weight}</p>
        <p className="text-danger">
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
        </p>
        <p>Abilities:</p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
      <br />
    </div>
  );
}
