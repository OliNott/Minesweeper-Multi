const table = document.querySelector("#minesweeper");
const gameSize = 10; // Modify this line to change the game size
let minePlaces = [];
const scoreCont = document.querySelector("#score");
let score = 0;


// Generating game table
function newTable (){
  table.innerHTML = "";
  for(row = 0; row <= gameSize; row++){
    const newRow = document.createElement("tr");
    for(col = 0; col <= gameSize; col++){
      const newCase = document.createElement("td");
      newCase.classList.add("unopened");
      const mineChance = (Math.random() * 10);
      if (mineChance < (gameSize / 5)) {
        minePlaces.push([col, row])
      }
    newRow.appendChild(newCase);
    }
    table.appendChild(newRow);
  }
  generateMines();
}

newTable(); // Generating a new table

// Function to configure the cells inside the new table
function generateMines() {
  tableCells = table.querySelectorAll("td");
  tableCells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
      clickedCell = event.currentTarget;
      console.log(clickedCell);
      const colPos = clickedCell.cellIndex;
      const rowPos = cell.parentNode.rowIndex;
      const clickPosition = [colPos, rowPos];
      if (clickedCell.classList.contains("unopened")) { score += 1; };
      scoreCont.innerText = score;
      whereIsMine();
      console.log()
      // Check if it's a mine
      minePlaces.forEach ((mine) => {

        if (mine[0] === clickPosition[0] && mine[1] === clickPosition[1]){
          clickedCell.classList.remove("unopened");
          clickedCell.classList.add("mine");
          const choice = confirm(`You lose ! Your score is ${score}`);
          if (choice) {
            minePlaces = [];
            newTable();
            score = 0;
          };
          return;
        } else {
          clickedCell.classList.remove("unopened");
          clickedCell.classList.add("opened");
        }
      });
    });
  });
}


// TODO
function whereIsMine() {
  console.log("There's mine around here");
};

[1, 2, 3] === [1, 2, 3]

//console.log(minePlaces)
