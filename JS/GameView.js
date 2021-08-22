export default class GameView {
  constructor() {}

  updateBoard(game) {
    this.updateTurn(game);
    const winningCombination = game.findWinningCombination();
    let winner = document.querySelector(".winner");
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;
      tile.classList.remove("tile-winner");

      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");

        // winner.innerHTML = `<span>${
        //   game.board[i] ? `${game.board[i]} Win's the Game` : ""
        // }</span>`;
      }
    }
  }
  updateTurn(game) {
    let playerX = document.querySelector(".player-X");
    let playerO = document.querySelector(".player-O");
    playerX.classList.remove("active");
    playerO.classList.remove("active");
    if (game.turn === "X") {
      playerX.classList.add("active");
    } else {
      playerO.classList.add("active");
    }
  }
}
