import React from 'react';
import './ConwaysVisual.css';
import Grid from './Board';
import NavComponent from './directory.jsx'

class GameOfLife extends React.Component {
  constructor() {
    super();
    this.nextStateTimer = 1000;
    // this.rows = 50;
    // this.cols = 50;
    this.rows = (window.innerHeight / 14); // 15px includes 14px cell size + 1px border
    this.cols = (window.innerWidth / 15);
    console.log("Window width:", window.innerWidth);
    console.log("Rows:", this.rows);
    console.log("Cols:", this.cols);
    this.initialAliveRate = 0.15;
    this.state = {
      generation: 0,
      cellStates: this.initializeBoard(),
      on: true
    };
    console.log("Constructor finished with", this.state.cellStates);
  }

  initializeBoard() {
    const initialBoard = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        const rand = Math.random();
        if (rand < this.initialAliveRate) {
          row.push(true);
        } else {
          row.push(false);
        }
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  getNextState() {
    // console.log("Trying to get next state");
    const current = this.state.cellStates;
    const rowMax = current.length;
    const colMax = current[0].length;
    const next = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        const smallRow = ((i - 1) + rowMax) % rowMax;
        const largeRow = ((i + 1) + rowMax) % rowMax;
        const smallCol = ((j - 1) + colMax) % colMax;
        const largeCol = ((j + 1) + colMax) % colMax;
        const neighbors = [current[smallRow][smallCol], current[smallRow][j], current[smallRow][largeCol],
          current[i][smallCol], current[i][largeCol],
          current[largeRow][smallCol], current[largeRow][j], current[largeRow][largeCol]];
        let aliveNeighbors = 0;
        for (let k = 0; k < neighbors.length; k++) {
          if (neighbors[k]) {
            aliveNeighbors++;
          }
        }
        row.push(this.getNextCell(current[i][j], aliveNeighbors));
      }
      next.push(row);
    }
    this.setState(prevState => ({
      generation: prevState.generation + 1,
      cellStates: next,
      on: prevState.on
    })
    // , () => {
    //   if (true) { // Adjust the number of iterations as needed
    //     setTimeout(() => {
    //       console.log("Generation:", this.state);
    //       this.getNextState();
    //     }, this.nextStateTimer);
    //   }
    // }
    );
  }

  getNextCell(curr, aliveCount) {
    if (curr && (aliveCount < 2 || aliveCount > 3)) {
      return false;
    }
    if (!curr && aliveCount === 3) {
      return true;
    }
    return curr;
  }

  handleResize() {
    console.log("RESIZED SCREEN");
    if (window.innerWidth/14 == this.rows) {
      return
    }
    this.rows = (window.innerHeight / 14);
    this.cols = (window.innerWidth / 15);
    console.log("Window width:", window.innerWidth);
    console.log("Rows:", this.rows);
    console.log("Cols:", this.cols);
    this.setState(prevState => ({
      generation: 0,
      cellStates: this.initializeBoard(),
      on: prevState.on
    }));
    // this.getNextState()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.simulate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  simulate() {
    clearInterval(this.intervalId)
    if (this.state.on) {
      this.intervalId = setInterval(() => this.getNextState(), this.nextStateTimer);
    }
  }

  reverseSimulation() {
    if (this.state.on) {
      this.setState(prevState => ({
        generation: prevState.generation,
        cellStates: prevState.cellStates,
        on: false
      }))
      clearInterval(this.intervalId)
    } else {
      this.setState(prevState => ({
        generation: prevState.generation,
        cellStates: prevState.cellStates,
        on: true
      }))
      this.intervalId = setInterval(() => this.getNextState(), this.nextStateTimer);

    }

  }

  render() {
    return (
      <>
        <NavComponent simulateButton={<button className='square rounded-pill toggleSimulateButton' onClick={() => this.reverseSimulation()}>{this.state.on ? "Disable Simulation" : " Enable  Simulation"}</button>}/>
        <Grid
          boardState={this.state.cellStates}
          rows={this.rows}
          cols={this.cols}
        />
      </>
    );
  }
}

export default GameOfLife;
