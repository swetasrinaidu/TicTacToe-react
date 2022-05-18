import './App.css';
import React from 'react';

function App() {
  return (
    <Game/>
      
  );
}

class Square extends React.Component{
  
  render(){
    return(
      <button className="square" onClick={()=>(this.props.onClick())}>{this.props.value} </button>
    );

    }
  }

 class Board extends React.Component{
   constructor(props){
     super(props);
     this.state={
       squares:Array(9).fill(''),
       xIsNext:true
     };

   }
   handleClick(i){
     const squares=this.state.squares.slice();
     if(calculateWinner(squares)||squares[i]) return;
     squares[i]= this.state.xIsNext?'X':'O';
     this.setState({squares:squares,xIsNext:!this.state.xIsNext});
   }
   renderSquare(i){
     return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />
   }
   render(){
     const winner = calculateWinner(this.state.squares);
     let status;
     if(winner) status = "Winner" + winner;
     else  status = "Next Player:" + `${this.state.xIsNext?"X":"O"}`
     return(
       <div className='board'>
        <div className='status'>{status}</div>
        <div className='board-row'>
          <div>{this.renderSquare(0)}</div>
          <div>{this.renderSquare(1)}</div>
          <div>{this.renderSquare(2)}</div>
        </div>
        <div className='board-row'>
          <div>{this.renderSquare(3)}</div>
          <div>{this.renderSquare(4)}</div>
          <div>{this.renderSquare(5)}</div>
        </div>
        <div className='board-row'>
          <div>{this.renderSquare(6)}</div>
          <div>{this.renderSquare(7)}</div>
          <div>{this.renderSquare(8)}</div>
        </div>
       </div>
     );
   }
 } 

class Game extends React.Component{
  render() {
    return (
      <div>
          <Board/>
      </div>
    )
  }
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
  for(let i=0;i<lines.length;i++){
    const [x,y,z] = lines[i];
    console.log("i",i,x,y,z)
    if(squares[x] && squares[y]===squares[z] && squares[z]===squares[x]) return squares[x];
  }  
  return "";

}
export default App;
