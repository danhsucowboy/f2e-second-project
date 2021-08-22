import React from 'react';
import logo from './logo.svg';
import Cell from './Cell'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="play-ground">
          <div className="cell-wrapper">
            <div className="open-cell">
              <Cell/>
              <Cell/>
              <Cell/>
              <Cell/>
            </div>
            <div className="icon-wrapper">
              <div className="king-n-logo">
                <div className="king">
                  {/* <img src="king_happy.png" alt="king-head" /> */}
                </div>
                <p className="title">FREECELL</p>
              </div>
            </div>
            <div className="foundation">
              <Cell bg="base-bg" mask="mask-spade"/>
              <Cell bg="base-bg" mask="mask-heart"/>
              <Cell bg="base-bg" mask="mask-diamond"/>
              <Cell bg="base-bg" mask="mask-club"/>
            </div>
          </div>
          <div className="card-table">
            <div className="drag-section">
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
              <div className="box">
                <div className="card"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="control-panel">
          <div className="board">
            <button className="show-rule">
              <div className="spade"></div>
            </button>
            <div className="timer board-text">TIME: 00:00</div>
            <div className="score board-text">SCORE: 0</div>
          </div>
          <div className="buttons">
            <button className="main-control">NEW GAME</button>
            <button className="main-control">RESTART</button>
            <button className="main-control">HINT</button>
            <button className="main-control">UNDO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
