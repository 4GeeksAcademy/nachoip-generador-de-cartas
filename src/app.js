/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorCartas() {
    let palos = ["♦", "♥", "♠", "♣"];
    let valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function palo(elem) {
      if (elem === "♥") return "heart";
      if (elem === "♦") return "diamond";
      if (elem === "♠") return "spades";
      if (elem === "♣") return "clubs";
    }

    let randomElement = array => {
      let numArray = Math.floor(Math.random() * array.length);
      return array[numArray];
    };
    let randomPalos = randomElement(palos);
    let randomValores = randomElement(valores);

    let colorPalo = palo(randomPalos);

    document.querySelector(
      "#card"
    ).innerHTML = `<div id="top-card" class="${colorPalo}">
      <p>${randomPalos}</p>
      </div>
      <div id="number-card fs-1">
      <p>${randomValores}</p>
      </div>
      <div id="foot-card" class="${colorPalo}">
      <p class="">${randomPalos}</p>
      </div>`;
  }

  document
    .getElementById("nuevaCarta")
    .addEventListener("click", generadorCartas);
  generadorCartas();
  setInterval(generadorCartas, 8000);
};
