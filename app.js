

let cells = document.querySelectorAll('.row > div');
console.log(cells[0])
let currentPlayer = "X"
const playtext = document.getElementById('player');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

function cellClicked(e) {
  e.target.textContent = currentPlayer
  if (playerHasWon()) {
    playtext.innerText = `${currentPlayer} has won!`;
    return
  } 

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  };
};

function playerHasWon() {
  console.log(cells[0].textContent, cells[1].textContent, cells[2].textContent, currentPlayer);
  if (cells[0].textContent == currentPlayer && cells[1].textContent == currentPlayer && cells[2].textContent == currentPlayer) {
    console.log('Win up top!');
    return true;
  };
  if (cells[0].textContent == currentPlayer && cells[3].textContent == currentPlayer && cells[6].textContent == currentPlayer) {
    console.log('Win left!');
    return true;
  };
  if (cells[0].textContent == currentPlayer && cells[4].textContent == currentPlayer && cells[8].textContent == currentPlayer) {
    console.log('Win diagonal!');
    return true;
  };
  if (cells[1].textContent == currentPlayer && cells[4].textContent == currentPlayer && cells[7].textContent == currentPlayer) {
    console.log('Win vertical!');
    return true;
  };
  if (cells[2].textContent == currentPlayer && cells[5].textContent == currentPlayer && cells[8].textContent == currentPlayer) {
    console.log('win right!');
    return true;
  };
  if (cells[2].textContent == currentPlayer && cells[4].textContent == currentPlayer && cells[6].textContent == currentPlayer) {
    console.log('Win diagonal!');
    return true;
  };
  if (cells[3].textContent == currentPlayer && cells[4].textContent == currentPlayer && cells[5].textContent == currentPlayer) {
    console.log('Win horizontal!');
    return true;
  };
  if (cells[6].textContent == currentPlayer && cells[7].textContent == currentPlayer && cells[8].textContent == currentPlayer) {
    console.log('Win bottom horizontal!');
    return true;
  };

}




 