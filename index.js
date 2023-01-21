let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let startGameBTN = document.getElementById("start-game");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let newCard = document.getElementById("new-card");


let player = {
  name: "Samira",
  chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.innerHTML = `${player.name}: $${player.chips}`;

console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return (randomNumber = 11);
  } else if (randomNumber > 10) {
    return (randomNumber = 10);
  } else {
    return randomNumber;
  }
}


function renderGame() {
    
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😉";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🤩";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😥";
    isAlive = false;
  }
  messageEl.innerHTML = message;
  cardEl.innerHTML = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardEl.innerHTML += `${cards[i]}  `;
  }
  sumEl.innerHTML = `Sum: ${sum}`;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

startGameBTN.addEventListener("click", startGame);

newCard.addEventListener("click", () => {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum = sum + card;
    renderGame();
  }
});
