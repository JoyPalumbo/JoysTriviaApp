
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
  scoreKeep() {
    if (selected === rightAnswer) {
      score++;
    }
  }

  render() {
    console.log(this.props.answers);
    return (
      <div>
        <div className="radio">
          <label>
            <input type='radio' id={this.props.rightAnswer} name='answer' value='radio-1'
              checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {/* <input type="radio" value="option2" checked={this.state.radio === 'option2'} onChange={this.radioChange} /> */}
            {/* <input type="radio" value="rightAnswer" checked={props.rightAnswer} onChange={this.handleChange} /> */}
            {this.props.answers.rightAnswer}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={'radio-2'} name='answer' value='radio-2'
              checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {this.props.answers.wrongAnswer1}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={'radio-3'} name='answer' value='radio-3'
              checked={this.state.selected === 'radio-3'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {this.props.answers.wrongAnswer2}
          </label>
        </div>

        <div className="radio">
          <label>
            <input type='radio' id={'radio-4'} name='answer' value='radio-4'
              checked={this.state.selected === 'radio-4'} onChange={(e) => this.setState({ selected: e.target.value })} />
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

