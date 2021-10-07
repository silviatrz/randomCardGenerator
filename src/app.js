/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  //write your code here

  const changeCard = () => {
    let numbers = [
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
    let suits = ["♦", "♥", "♠", "♣"];
    let randomNumber = Math.floor(Math.random() * numbers.length);
    let randomSuit = Math.floor(Math.random() * suits.length);
    let number = document.querySelector(".number");
    let suit = document.querySelector(".suit");
    let suit2 = document.querySelector(".suit-upside-down");

    if (randomSuit == 2 || randomSuit == 3) {
      suit.style.color = "black";
      suit2.style.color = "black";
    } else {
      suit.style.color = "red";
      suit2.style.color = "red";
    }

    number.textContent = numbers[randomNumber];
    suit.textContent = suits[randomSuit];
    suit2.textContent = suits[randomSuit];
  };
  changeCard();

  let button = document.querySelector(".btn");
  button.addEventListener("click", changeCard);
};
