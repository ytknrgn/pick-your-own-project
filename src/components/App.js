import React from 'react';
import Trivia from './Trivia';

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      level: 1,
      score: 0,
      correctAnswersAtCurrentLevel: 0,
      lives: 3
    };

    this.getResponse = this.getResponse.bind(this);
  }
  
  componentDidMount() {
    this.fetchTrivia();
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
    newTrivia.incorrect_answers.map(answer => this.decodeHtml(answer));
    return newTrivia;
  }

  fetchTrivia() {
    const level = this.state.level;
    const difficulty = (level === 1 ? 'easy': level === 2 ? 'medium' : 'hard');
    fetch(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`)
    .then(response => response.json())
    .then(body => this.parseTrivia(body.results[0]))
    .then(trivia => this.setState({ trivia }));
  }

  getResponse(isCorrect) {
    let level = this.state.level;
    const value = level * 100;
    if (isCorrect) {
      this.setState({ score: this.state.score + value });
      this.fetchTrivia();
      let correctAnswersAtCurrentLevel = this.state.correctAnswersAtCurrentLevel;

      if (correctAnswersAtCurrentLevel < 9) {
        correctAnswersAtCurrentLevel++;
        this.setState({ correctAnswersAtCurrentLevel });
      }
      else {
        level++;
        correctAnswersAtCurrentLevel = 0;
        this.setState({ correctAnswersAtCurrentLevel,
                        level });
      }
    }
    else {
      this.setState({ lives: this.state.lives -1 });
      this.fetchTrivia();
    }
  }

  render() {

    return (
      <div className="app">
        <div>Score: {this.state.score}</div>
        <div>Level: {this.state.level}</div>
        <div>Lives: {this.state.lives}</div>
        {this.state.trivia && <Trivia getResponse={this.getResponse} trivia={this.state.trivia}/>}
      </div>
    );
  }
}

export default App;