import React from 'react';
import Trivia from './Trivia';
import NewGame from './NewGame';
import PlayerStats from './PlayerStats';
import GameOver from './GameOver';
import '../../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      level: 1,
      difficulty: 'easy',
      score: 0,
      correctAnswersAtCurrentLevel: 0,
      lives: 3,
      status: 'newGame'
    };

    this.getResponse = this.getResponse.bind(this);
    this.getDifficulty = this.getDifficulty.bind(this);
    this.getRestart = this.getRestart.bind(this);
  }
  
  componentDidMount() {
    //this.fetchTrivia();
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  parseTrivia(trivia) {
    const newTrivia = Object.assign({},trivia);
    newTrivia.question = this.decodeHtml(trivia.question);
    newTrivia.correct_answer = this.decodeHtml(trivia.correct_answer);
    newTrivia.incorrect_answers = newTrivia.incorrect_answers.map(answer => this.decodeHtml(answer));
    return newTrivia;
  }

  fetchTrivia() {
    fetch(`https://opentdb.com/api.php?amount=1&difficulty=${this.state.difficulty}&type=multiple`)
    .then(response => response.json())
    .then(body => this.parseTrivia(body.results[0]))
    .then(trivia => this.setState({ trivia }));
  }

  getDifficulty(difficulty) {
    const level = (difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3);
    this.setState({ level,
                    difficulty,
                    status: 'inProgress' });
    this.fetchTrivia();
  }

  getRestart() {
    this.setState({ status: 'newGame',
                    score: 0,
                    correctAnswersAtCurrentLevel: 0,
                    lives: 3
    })
  }

  getResponse(isCorrect) {
    let level = this.state.level;
    const value = level * 100;
    if (isCorrect) {
      this.setState({ score: this.state.score + value });
      setTimeout(() => this.fetchTrivia(), 500);
      let correctAnswersAtCurrentLevel = this.state.correctAnswersAtCurrentLevel;

      if (correctAnswersAtCurrentLevel < 9) {
        correctAnswersAtCurrentLevel++;
        this.setState({ correctAnswersAtCurrentLevel });
      }
      else {
        level++;
        const difficulty = (level === 1 ? 'easy' : level === 2 ? 'medium' : 'hard');
        const lives = this.state.lives + 1;
        correctAnswersAtCurrentLevel = 0;
        this.setState({ correctAnswersAtCurrentLevel,
                        level,
                        difficulty,
                        lives });
      }
    }
    else {
      const lives = this.state.lives;
      if (lives > 1) {
        this.setState({ lives: this.state.lives - 1 });
        this.fetchTrivia();
      }
      else {
        this.setState({ status: 'gameOver' });
      }
    }
  }

  render() {

    return (
      <div className="app">
        {this.state.status === 'newGame' && <NewGame getDifficulty={this.getDifficulty}/>}
        {this.state.status === 'gameOver' && <GameOver getRestart={this.getRestart}/>}
        {this.state.status === 'inProgress' && <div className='trivia__title'>Who Knows?</div>}
        {this.state.status === 'inProgress' && <PlayerStats score={this.state.score} level={this.state.difficulty} lives={this.state.lives} />}
        {this.state.status === 'inProgress' && this.state.trivia && <Trivia getResponse={this.getResponse} trivia={this.state.trivia}/>}
        <div className='footer'>© 2018, Yetkin Ergun. Powered by the Open Trivia API</div>
      </div>
    );
  }
}

export default App;