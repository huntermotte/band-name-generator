import React, { Component } from "react";
import logo from "./plantMom.png";
import "./App.css";

const generatebandName = () => {
  const hipsterBandNames = [
    "Aunt Jemima's Wife",
    "The Icicles",
    "Indigo Fetus",
    "Cold Brü",
    "The Jersey Turnpike Drifters",
    "Eggplant Submarines",
    "The Callback Functions",
    "Confident Chub",
    "Peanut Butter and Gypsy Sandwich",
    "Not My Artifical Meat",
    "The Fractures",
    "[Lead Singer Name] and the Pocket Squares",
    "Megapixel Mondays",
    "The Budapest Banjos",
    "Moustache Wax",
    "Don't Touch My Baguette"
  ];
  let randomIndex = Math.floor(Math.random() * hipsterBandNames.length);
  let bandName = hipsterBandNames[randomIndex];
  return bandName;
};

let newBandName = generatebandName();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hipster Band Name Generator</h1>
        </header>
        <div className="bandNameDiv">
          <h1 className="bandHeader">{newBandName}</h1>
          <button
            className="btn btn-danger"
            onClick={event => {
              event.preventDefault();
              newBandName = generatebandName();
              let headerElement = document.getElementsByClassName("bandHeader");
              headerElement[0].innerHTML = newBandName;
            }}
          >
            Get new suggestion
          </button>
        </div>

        <div className="donate">
          <footer className="donateNote">
            If this generator found your band&#39;s name or gave you a good
            laugh, consider donating:
          </footer>
          <a href="https://paypal.me/huntermotte" target="_blank">
            <button className="btn btn-primary">
              Help fund more hipster band names
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
