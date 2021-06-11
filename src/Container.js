const Container = () => {
  let selected = [];

  const handleCellClick = (e) => {
    if (!e.shiftKey) {
      selected.forEach((s) => s.classList.remove('highlighted'));
      selected = [e.target];
    }

    e.target.classList.add('highlighted');
    selected.push(e.target);
  };

  const handleKey = (e) => {
    const { key } = e;

    if (key === 'Backspace') {
      selected.forEach((element) => {
        if (!element.classList.contains('hard')) {
          element.innerHTML = '';
        }
      });
      return;
    }

    if (!parseInt(key)) {
      return;
    }

    selected.forEach((element) => {
      if (!element.classList.contains('hard')) {
        element.innerHTML = key;
      }
    });
  };

  return (
    <div
      className="container"
      onKeyDown={(e) => {
        handleKey(e);
      }}
      tabIndex="0"
    >
      <div className="gameContainer">
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 0"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 1"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 2"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 9"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 10"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 11"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 18"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 19"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 20"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 3"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 4"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 5"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 12"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 13"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 14"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 21"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 22"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 23"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 6"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 7"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 8"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 15"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 16"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 17"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 24"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 25"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 26"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 27"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 28"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 29"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 36"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 37"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 38"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 45"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 46"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 47"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 30"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 31"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 32"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 39"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 40"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 41"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 48"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 49"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 50"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 33"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 34"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 35"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 42"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 43"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 44"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 51"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 52"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 53"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 54"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 55"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 56"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 63"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 64"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 65"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 72"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 73"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 74"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 57"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 58"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 59"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 66"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 67"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 68"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 75"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 76"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 77"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
        <div className="gameBlock">
          <div
            className="gameCell"
            id="cell 60"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 61"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 62"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 69"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 70"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 71"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 78"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 79"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
          <div
            className="gameCell"
            id="cell 80"
            onClick={(e) => {
              handleCellClick(e);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Container;
