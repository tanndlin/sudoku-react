import Sudoku from './sudoku';

const Topbar = () => {
  const score = 0;
  const fillRate = 0.3;
  const board = new Sudoku();

  const setCell = (valueObj) => {
    const cells = Array.from(document.getElementsByClassName('gameCell'));
    cells.forEach((c) => {
      const [, id] = c.id.split(' ');
      if (parseInt(id) !== valueObj.index) {
        return;
      }

      if (valueObj.value === 0) {
        c.innerHTML = '';
        c.classList.remove('hard');
        return;
      }

      c.innerHTML = valueObj.value;
      c.classList.add('hard');
    });
  };

  const generateSudoku = () => {
    board.createNewBoard();
    board.generateBoard();
    const sequence = board.getInputSequence(fillRate).map((value, i) => {
      return { index: i, value: value };
    });

    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * sequence.length);
      setCell(sequence[index]);
      sequence.splice(index, 1);

      if (sequence.length === 0) {
        clearInterval(interval);
        console.log('Done');
      }
    }, 10);
  };

  return (
    <nav className="topbar">
      <h1 id="score">Score: {score}</h1>
      <button onClick={generateSudoku}>Generate Sudoku</button>
    </nav>
  );
};

export default Topbar;
