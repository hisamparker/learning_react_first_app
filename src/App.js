import React from "react";
import "./App.css";
import Title from "./components/Title";
import Dndfriends from "./components/Dndfriends";

const dnd_characters = [
  {
    name: "Windex",
    race: "Lizardfolk",
    class: "druid",
    weight: "150",
    awesome: false,
    terrifying: true,
    abilities: ["Bite", "Heal", "Night vision", "Tough claws"],
  },
  {
    name: "Bindex",
    race: "Bizardfolk",
    class: "Bruid",
    weight: "250",
    awesome: false,
    terrifying: true,
    abilities: ["Bite", "Beal", "Night vision", "Tough claws"],
  },
  {
    name: "Cindex",
    race: "Cizardfolk",
    class: "Cruid",
    weight: "350",
    awesome: false,
    terrifying: true,
    abilities: ["Cite", "Heal", "Night vision", "Tough claws"],
  },
];

function App() {
  return (
    <div className="App">
      <main className="container my-5">
        <Title className="mb-4" content="DnD is noice" />
        <div className="row">
          {dnd_characters.map(function (character) {
            return (
              <div className="col-md-6 col-lg-4">
                <Dndfriends
                  name={character.name}
                  race={character.race}
                  class={character.class}
                  weight={character.weight}
                  awesome={character.awesome}
                  terrifying={character.awesome}
                  abilities={character.abilities}
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
