
import React from 'react';


class Answers extends React.Component {
  constructor() {
    super();

    this.state = {
      question: '',
      rightAnswer: '',
      wrongAnswer1: '',
      wrongAnswer2: '',
      wrongAnswer3: '',
      score: 0,
      displayAnswer: false,
      selected: '',
    };
    this.displayAnswerFunc = this.displayAnswerFunc.bind(this);
  }

  displayAnswerFunc() {
    this.setState({
      displayAnswer: !this.state.displayAnswer
    });
  }
  //if selected === rightAnswer score++
  scoreKeep(e) {
    console.log(e);
    console.log(this.state.score);
    if (e === true) {
      this.setState.score = this.state.score++;
    }
  }

  // clicked() {
  //   this.scoreKeep();
  // }

  render() {
    const { items } = this.state;
    console.log(this.props.answers);
    return (
      <div>
        <h3>Score: {this.state.score} </h3>
        <div className="radio">
          <label>
            <input type='radio' id={this.props.rightAnswer} name='answer' value='true'
              checked={this.state.selected === 'true'} onChange={(e) => this.setState({ selected: e.target.value })} onClick={() => this.scoreKeep(true)} />
            {/* <input type="radio" value="option2" checked={this.state.radio === 'option2'} onChange={this.radioChange} /> */}
            {/* <input type="radio" value="rightAnswer" checked={props.rightAnswer} onChange={this.handleChange} /> */}
            {this.props.answers.rightAnswer}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={this.props.answers.wrongAnswer1} name='answer' value='false'
              checked={this.state.selected === 'false'} onChange={(e) => this.setState({ selected: e.target.value })} onClick={() => this.scoreKeep(false)} />
            {this.props.answers.wrongAnswer1}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={this.props.answers.wrongAnswer2} name='answer' value='false'
              checked={this.state.selected === 'false'} onChange={(e) => this.setState({ selected: e.target.value })} onClick={() => this.scoreKeep(false)} />
            {this.props.answers.wrongAnswer2}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={this.props.answers.wrongAnswer3} name='answer' value='false'
              checked={this.state.selected === 'false'} onChange={(e) => this.setState({ selected: e.target.value })} onClick={() => this.scoreKeep(false)} />
            {this.props.answers.wrongAnswer3}
          </label>
        </div>

        <div>
          {this.state.displayAnswer && <h1>{this.props.answers.rightAnswer} </h1>}
          <button type="button" onClick={this.displayAnswerFunc}>Show/Hide answer</button>
        </div>
      </div>
    );
  }
}

export default Answers;

