import React, { useState } from 'react';
import './App.css';
import Box from './box';
  function Game() {

  const [turn, setTurn] = useState('X')
  const board = [[], [], []]

    function changeTurn(row, col){

        board[row][col] = turn

        setTurn(turn => turn == 'X' ? 'O' :'X')
        console.log(board)
    }
    return <div id ="game">
      <div><h1>TIC TAC TOC GAME</h1></div>
      <br />
      <br />
      <div className="row">
          <Box row={0} col={0} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={0} col={1} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={0} col={2} currentState = {turn} changeTurn={changeTurn}/>
      </div>

      <div className="row">
          <Box row={1} col={3} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={1} col={4} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={1} col={5}currentState =  {turn} changeTurn={changeTurn}/>
      </div>

      <div className="row">
          <Box row={2} col={6} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={2} col={7} currentState = {turn} changeTurn={changeTurn}/>
          <Box row={2} col={8} currentState = {turn} changeTurn={changeTurn}/>
      </div>
    </div>
  }
  


export default Game;