import React from 'react';
import axios from 'axios';

import Answers from './Answers.jsx';
import TopQuestions from './TopQuestions.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        question: '',
        rightAnswer: '',
        wrongAnswer1: '',
        wrongAnswer2: '',
        wrongAnswer3: '',
        // answerChoices: [],
        displayAnswer: false,
        selected: '',
        vote: 0,
      },
    };
    this.handleClick = this.handleClick.bind(this);
    // this.showAnswer = this.showAnswer.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.displayAnswerFunc = this.displayAnswerFunc.bind(this);
    this.voteCounter = this.voteCounter.bind(this);
    this.postVote = this.postVote.bind(this);
  }


  handleClick() {
    return axios.get('/api/question')
      .then((response) => {
        this.setState({
          items: {
            question: response.data.question,
            rightAnswer: response.data.rightAnswer,
            wrongAnswer1: response.data.wrongAnswer1,
            wrongAnswer2: response.data.wrongAnswer2,
            wrongAnswer3: response.data.wrongAnswer3,
            // answerChoices: response.data.answerChoices,
            score: 0,
            displayAnswer: false,
            selected: '',
            vote: 0,
          },
        });

      })
      .catch((err) => {
        console.log("getItems request failed: ", err);
      });
  }


  displayAnswerFunc() {
    this.setState({
      displayAnswer: !this.state.displayAnswer
    });
  }

  postVote() {
    axios.post('/votes', {
      question: this.state.items.question,
      vote: this.state.items.vote,

    })
      .then((response) => {
        console.log("sending vote to server", response)
      })
      .catch((err) => {
        console.log("ops, didn't send vote to server", err);
      });
  }

  voteCounter(e) {
    console.log("clicked", e, this.state.items.vote);
    let vote = this.state.items.vote;
    if (e === 'vote') {
      this.setState.vote = this.state.items.vote++;
      // this.setState.items.vote = 10;
      this.postVote();
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Joy's Awesome Trivia App</h1>

        <button type="question" onClick={this.handleClick} onChange={this.displayAnswerFunc}> Click for Trivia question</button>
        <h2>Question</h2>
        <ul> {items.question} </ul>
        <h3>Answers</h3>
        <Answers answers={items} />
        <button type="button" id={items.question} onClick={() => this.voteCounter('vote')}>Click here to vote for this question</button>
        <TopQuestions />
      </div>

    );
  }
}
export default App;

