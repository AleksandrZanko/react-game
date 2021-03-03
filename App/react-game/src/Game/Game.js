import React from 'react';
import './game.css';
import Info from './Info.js';
import PlayerChoice from './PlayerChoice';
import Button from './Button';
import ComputerChoice from './ComputerChoice';
import Popup from './Popup';
import EndGame from './EndGame';

import winsound from '../audio/win.mp3';
import losesound from '../audio/lose.mp3';
import MusicButton from './MusicButton';
import SoundButton from './SoundButton';
import NewGameButton from './NewGameButton';


class Game extends React.Component {
  constructor() {
    super();

    this.addTime = this.addTime.bind(this);
    this.startTime = this.startTime.bind(this);
    this.startGame = this.startGame.bind(this);
    this.playerOption = this.playerOption.bind(this);
    this.deleteOverflow = this.deleteOverflow.bind(this);
    this.deleteExtraOptions = this.deleteExtraOptions.bind(this);
    this.computerChoice = this.computerChoice.bind(this);
    this.findComputerVariant = this.findComputerVariant.bind(this);
    this.findResult = this.findResult.bind(this);
    this.checklifes = this.checklifes.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.addToLocalStogage = this.addToLocalStogage.bind(this);
    this.musicOff = this.musicOff.bind(this);
    this.soundOff = this.soundOff.bind(this);
    this.addKeyboardControl = this.addKeyboardControl.bind(this);
    this.newGame = this.newGame.bind(this);

    this.state = {
      time: 0,
      lifes: 3,
      points: 0,
      gameActive: false,
      name: '',
      playerVariant: '',
      computerVariant: '',
      date: '',
      winSound: new Audio(winsound),
      loseSound: new Audio(losesound)
    }
  }
  
  addTime() {
    this.setState({
      time: this.state.time + 1
    })
  }

  startTime() {   
    setInterval(() => {
      this.addTime();
    }, 1000);
  }

  deleteOverflow() {
    let overflow = document.querySelector('.overflow');
    overflow.style.display = 'none';
  }

  openPopup() {
    let popup = document.querySelector('.popup');
    let popupOverlay = document.querySelector('.popup-overlay');

    popup.classList.add('popup--active');
    popupOverlay.classList.add('popup-overlay--active');
  }

  closePopup() {
    let popup = document.querySelector('.popup');
    let popupOverlay = document.querySelector('.popup-overlay');
    const name = document.querySelector('.name');
    
    if (name.value.length > 0 && name.value.length <= 13) {
      name.style.borderColor = 'black';
      popup.classList.remove('popup--active');
      popupOverlay.classList.remove('popup-overlay--active');
      this.setState({
        name: name.value
      });
      this.deleteOverflow();
      this.startTime();
      this.addKeyboardControl();
      this.newGame();
    } else {
      name.classList.add('error');
      setTimeout(() => {
        name.classList.remove('error');
        name.focus();
      }, 700);
    } 
  }

  newGame() {
    let button = document.querySelector('.new-game-btn');
    button.style.display = 'block';
  }

  addKeyboardControl() {  
    let count = 0; 
    document.addEventListener('keydown', (event) => {
    if((event.code === 'Space' || event.code === 'KeyZ' || event.code === 'KeyX') && count > 0) {   
      return false;    
    }

    let overflow = document.querySelector('.overflow').style.display;
    if((event.code === 'Space' || event.code === 'KeyZ' || event.code === 'KeyX') && overflow === '') {   
      return false;    
    }
   
        if(event.code === 'Space') {
          this.setState({
            playerVariant: 'paper'
          });
          count++;
          this.deleteExtraOptions();
          this.computerChoice();
          setTimeout(() => count--, 5000);
        }

        if(event.code === 'KeyZ') {
          this.setState({
            playerVariant: 'rock'
          });
          count++;
          this.deleteExtraOptions();
          this.computerChoice();
          setTimeout(() => count--, 5000);
        }

        if(event.code === 'KeyX') {
          this.setState({
            playerVariant: 'scissors'
          });
          count++;
          this.deleteExtraOptions();
          this.computerChoice();
          setTimeout(() => count--, 5000);
        }
      }) 
  }
  
  async musicOff(e) {   
    this.props.changeMusicOn();

    e.target.classList.toggle('music-button--off');

    if(e.target.classList.contains('music-button--off')) {
      this.props.bgsound.pause();
    } else {
      this.props.bgsound.play();
      this.props.bgsound.volume = this.props.musicVolume;     
    }
  }

  async soundOff(e) {
    this.props.changeSoundOn();

    e.target.classList.toggle('music-button--off');
    
    if(e.target.classList.contains('music-button--off')) {
      this.state.winSound.muted = true;
      this.state.loseSound.muted = true;
    } else {
      this.state.winSound.muted = false;
      this.state.loseSound.muted = false;     
    }
  } 

  startGame(e) {
    e.preventDefault();
    this.openPopup();

    e.target.style.display = 'none'; 
  }

  componentWillUnmount() {
    clearInterval(this.timer); 
  }

  deleteExtraOptions() {
    let currentVariant = this.state.playerVariant;
    let paper;
    let scissors;
    let rock;
    if(this.props.region === 'europa') {
       paper = document.querySelector('.game-player--paper');
       scissors = document.querySelector('.game-player--scissors');
       rock = document.querySelector('.game-player--rock');
    } else {
       paper = document.querySelector('.game-player--paper-africa');
       scissors = document.querySelector('.game-player--scissors-africa');
       rock = document.querySelector('.game-player--rock-africa');
    }

    if(this.state.playerVariant === 'paper') { 
      scissors.classList.add('delete');
      rock.classList.add('delete');
      paper.disabled = true;
      setTimeout( () => {
        rock.classList.remove('delete');
        scissors.classList.remove('delete');
        paper.disabled = false;
      }, 5000);
    } else if(this.state.playerVariant === 'rock') {
      paper.classList.add('delete');
      scissors.classList.add('delete');
      rock.disabled = true;
      setTimeout( () => {
        paper.classList.remove('delete');
        scissors.classList.remove('delete');
        rock.disabled = false;
      }, 5000);
    } else {
      rock.classList.add('delete');
      paper.classList.add('delete');
      scissors.disabled = true;
      setTimeout( () => {
        rock.classList.remove('delete');
        paper.classList.remove('delete');
        scissors.disabled = false;
      }, 5000);
    } 
  }

  findComputerVariant() { 
    let variantsArr = ['rock', 'scissors', 'paper'];
    let answer = document.querySelector('.game-computer--answer');

    let rand = 0 + Math.random() * (2 + 1 - 0);
    let computerVariant = variantsArr[Math.floor(rand)];
    this.setState({
      computerVariant: computerVariant
    })

    if(computerVariant === 'rock') {     
      setTimeout( () => {
        if(this.props.region === 'europa') {
          answer.classList.add('rock');
        } else {
          answer.classList.add('rock-africa');
        }     
      }, 3010);
      setTimeout( () => {
        if(this.props.region === 'europa') {
          answer.classList.remove('rock');
        } else {
          answer.classList.remove('rock-africa');
        }  
      }, 5000);
    } else if(computerVariant === 'paper') {
      setTimeout( () => {
        if(this.props.region === 'europa') {
        answer.classList.add('paper');
        } else {
          answer.classList.add('paper-africa');
        }
      }, 3010);
      setTimeout( () => {
        if(this.props.region === 'europa') {
          answer.classList.remove('paper');
        } else {
          answer.classList.remove('paper-africa');
        }   
      }, 5000);
    } else {
      setTimeout( () => {
        if(this.props.region === 'europa') {
          answer.classList.add('scissors');
        } else {
          answer.classList.add('scissors-africa');
        }     
      }, 3010);
      setTimeout( () => {
        if(this.props.region === 'europa') {
          answer.classList.remove('scissors');
        } else {
          answer.classList.remove('scissors-africa');
        }     
      }, 5000);
    }

    setTimeout( () => {
      this.checklifes();
    }, 5000);
  }

  checklifes() {
    if(this.state.lifes === 0) {
      this.addToLocalStogage();
      let endGameWrapper = document.querySelector('.end-game');
      endGameWrapper.classList.add('end-game--active');
    }
  }

  addToLocalStogage() {
    let obj = {};
    obj.name = this.state.name;
    obj.id = Math.floor(0 + Math.random() * (1000 + 1 - 0));
    obj.points = this.state.points;
    obj.time = this.state.time;
    obj.date = new Date();

    localStorage.setItem(`winner ${obj.id}`, JSON.stringify(obj));
  }

  endGame() {
    window.location.reload();
  }
  
  findResult() {
    let playerChoice = this.state.playerVariant;
    let computerChoice = this.state.computerVariant;
    
    let screen = document.querySelector('.game-field-screen');

    setTimeout( () => {
      if(playerChoice === computerChoice) {
        screen.innerText = 'Ничья';
      } else if((playerChoice === 'rock' && computerChoice === 'scissors') || 
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        screen.innerText = 'Вы победили!';
        this.state.winSound.play();
        this.state.winSound.volume = this.props.soundVolume;
        screen.classList.add('win');
        this.setState({
          points: this.state.points + 1
        })
        setTimeout( () => {
          screen.classList.remove('win');
        }, 2000)
      } else if((playerChoice === 'rock' && computerChoice === 'paper') || 
      (playerChoice === 'paper' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'rock')
      ) {
        screen.innerText = 'Вы проиграли';
        screen.classList.add('lose');
        this.state.loseSound.play();
        this.state.loseSound.volume = this.props.soundVolume;
        this.setState({
          lifes: this.state.lifes - 1
        })
        setTimeout( () => {
          screen.classList.remove('lose');
        }, 2000)
      }
    }, 3000)
    setTimeout( () => {
      screen.innerText = 'VS';
    }, 5000)
  }

  computerChoice() {
    let computerVariant = document.querySelector('.game-computer--answer');
    computerVariant.classList.add('computer-choice');
    
    this.findComputerVariant();
    this.findResult();

    setTimeout( () => {
      computerVariant.classList.remove('computer-choice');
    }, 5000);
  }

  async playerOption(e) {
    e.preventDefault();
     await this.setState({
      playerVariant: e.target.id
    })

    this.deleteExtraOptions();
    this.computerChoice();
  }

  render() {
    return (
      <>
        <h1 className="game-title">Страница игры</h1>
        <div className="game-wrapper">
          <Info time={this.state.time} lifes={this.state.lifes} points={this.state.points}/>
          <MusicButton musicOff={this.musicOff} musicOn={this.props.musicOn}/>
          <SoundButton soundOff={this.soundOff} soundOn={this.props.soundOn}/>
          <div className="game-field">
            <PlayerChoice region={this.props.region} playerOption={this.playerOption}/>
            <div className="game-field-screen">VS</div>
            <ComputerChoice />
          </div>
          <Button startGame={this.startGame}/>
          <NewGameButton />
        </div>
        <Popup closePopup={this.closePopup}/>
        <EndGame endGame={this.endGame}/>
      </>
    )
  }
}

export default Game;