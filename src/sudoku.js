class Sudoku {
  createNewBoard() {
    this.index = 0;
    this.board = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
    this.possible = this.board.map((row) => row.map((_) => [1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }

  generateBoard() {
    if (this.checkFilled()) {
      return;
    }

    this.populateBoard();
    this.generateBoard();
  }

  backtrack() {
    const x = this.index % 9;
    const y = Math.floor(this.index / 9);
    this.possible[y][x] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.board[y][x] = 0;
    this.index--;
  }

  populateBoard() {
    const x = this.index % 9;
    const y = Math.floor(this.index / 9);
    const possibleValues = this.possible[y][x];

    if (!possibleValues.length) {
      this.backtrack();
      return this.populateBoard();
    }

    const index = Math.floor(Math.random() * possibleValues.length);
    const val = possibleValues[index];
    if (!this.isValid(val, x, y)) {
      this.possible[y][x].splice(index, 1);
      return this.populateBoard();
    }
    this.board[y][x] = val;
    this.possible[y][x].splice(index, 1);
    this.index++;
  }

  isValid(val, x, y) {
    const neighbors = [];
    for (let i = 0; i < 9; i++) {
      if (i === x) {
        continue;
      }
      neighbors.push(this.board[y][i]);
    }

    for (let j = 0; j < 9; j++) {
      if (j === y) {
        continue;
      }
      neighbors.push(this.board[j][x]);
    }

    const blockX = Math.floor(x / 3) * 3;
    const blockY = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const newX = blockX + i;
        const newY = blockY + j;
        if (newX === x && newY === y) {
          continue;
        }

        neighbors.push(this.board[newY][newX]);
      }
    }

    return !neighbors.includes(val);
  }

  generateSudokuList() {
    const ret = [];
    this.board.forEach((row) => ret.push(...row));
    return ret;
  }

  getInputSequence(fillRate) {
    const ret = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Math.random() > fillRate) {
          ret.push(0);
          continue;
        }

        ret.push(this.board[i][j]);
      }
    }

    return ret;
  }

  checkFilled() {
    return !this.board.some((row) => row.includes(0));
  }

  checkSolution() {
    const cells = Array.from(document.getElementsByClassName('gameCell'));
    return cells.every((c) => {
      const [, id] = c.id.split(' ');
      const x = parseInt(id) % 9;
      const y = Math.floor(parseInt(id) / 9);

      return this.board[y][x] === parseInt(c.innerHTML);
    });
  }
}

export default Sudoku;
