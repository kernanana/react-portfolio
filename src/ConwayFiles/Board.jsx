import React from "react"
import "./ConwaysVisual.css"

class Cell extends React.Component {
  selectBox = () => {
    console.log("Selected: ", this.props.row, this.props.col);
    this.props.selectBox(this.props.row, this.props.col);
  };


  render() {
    return (
      <div 
      className={this.props.cellClass}
      id={this.props.id}
      onClick={this.selectBox}>
      </div>
    )
  }
}

const Grid = props => {
  const states = props.boardState;
  const board = states.map((row, i) => {
    const rowCells = row.map((item, j) => {
      const cellId = `${i}_${j}`;
      const cellClass = states[i][j] ? "cell aliveCell" : "cell deadCell";
      return (
        <Cell
          id={cellId}
          key={cellId}
          cellClass={cellClass}
          row={i}
          col={j}
          selectBox={props.selectBox}
        ></Cell>
      );
    });

    // Add a div to clear the row and start a new line
    return (
      <div key={`row_${i}`} style={{ display: "flex" }} width="100%">
        {rowCells}
      </div>
    );
  });

  return (
    <div className="golBoard">
      {board}
    </div>
  );
};


export default Grid