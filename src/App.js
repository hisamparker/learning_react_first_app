import React from "react";
import logo from "./logo.svg";
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
    abilities: ["Bite", "Heal", "Night vision", "Tough claws"]
  },
  {
    name: "Bindex",
    race: "Bizardfolk",
    class: "Bruid",
    weight: "250",
    awesome: false,
    terrifying: true,
    abilities: ["Bite", "Beal", "Night vision", "Tough claws"]
  },
  {
    name: "Cindex",
    race: "Cizardfolk",
    class: "Cruid",
    weight: "350",
    awesome: false,
    terrifying: true,
    abilities: ["Cite", "Heal", "Night vision", "Tough claws"]
  },
]

function App() {
  return (
    <div className="App">
      <main>
        <Title content="DnD is noice" />
    
        {dnd_characters.map(function (character){
        return <Dndfriends 
        name={character.name} 
        race={character.race} 
        class={character.class}
        weight={character.weight}
        awesome={character.awesome}
        terrifying={character.awesome}
        abilities={character.abilities} />;
        })}
      </main>

      <header className="App-header">
        <h1>my first React thingy is no longer broken!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>this is an experiment. it is maybe working?</p>
        <a
          className="App-link"
          href="https://www.reddit.com/r/reactjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          i maybe will learn React? who knows!
        </a>
      </header>
    </div>
  );
}

export default App;
