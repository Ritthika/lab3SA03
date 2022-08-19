import React, { useState } from 'react';
import './App.css';
import Box from './box';
  function Game() {

const [turn, setTurn] = useState('X')

    function changeTurn(){
        setTurn(turn => turn == 'X' ? 'O' :'X')
    }
    return <div id ="game">
      <div><h1>TIC TAC TOC GAME</h1></div>
      <br />
      <br />
      <div className="row">
          <Box id={0} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={1} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={2} currentState = {turn} changeTurn={changeTurn}/>
      </div>

      <div className="row">
          <Box id={3} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={4} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={5}currentState =  {turn} changeTurn={changeTurn}/>
      </div>

      <div className="row">
          <Box id={6} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={7} currentState = {turn} changeTurn={changeTurn}/>
          <Box id={8} currentState = {turn} changeTurn={changeTurn}/>
      </div>
    </div>
  }
  


export default Game;