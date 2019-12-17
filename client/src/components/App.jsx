import React from 'react';
import axios from 'axios';

import List from './List.jsx';
import ListItem from './ListItem.jsx';
import Answers from './Answers.jsx';

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
        rightCount: 0,
        wrongCount: 0,
        displayAnswer: false,
        selected: "",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    // this.showAnswer = this.showAnswer.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.displayAnswerFunc = this.displayAnswerFunc.bind(this);

  }

  componentDidMount() {
    // this.getItems()
    //   .then((items) => {
    //     this.setState({
    //       items,
    //     });
    //   })
    //   .catch((err) => {
    //     console.error('Failed to get items!', err);
    //   });
  }

  // getItems() {
  // this.setState({
  //   items: {
  //     question: response.question,
  //     rightAnswer: response.correct_answer,
  //     wrongAnswer1: response.data.results[0].incorrect_answers[0],
  //     wrongAnswer2: response.data.results[0].incorrect_answers[1],
  //     wrongAnswer3: response.data.results[0].incorrect_answers[2],
  //     rightCount: 0,
  //     wrongCount: 0,
  //   },
  // }


  //this works to get api data right away
  // handleClick() {
  //   // debugger;
  //   // console.log("we're clicking");
  //   return axios.get('https://opentdb.com/api.php?amount=1')
  //     .then((response) => {
  //       this.setState({
  //         items: {
  //           question: response.question,
  //           rightAnswer: response.correct_answer,
  //           wrongAnswer1: response.data.results[0].incorrect_answers[0],
  //           wrongAnswer2: response.data.results[0].incorrect_answers[1],
  //           wrongAnswer3: response.data.results[0].incorrect_answers[2],
  //           rightCount: 0,
  //           wrongCount: 0,
  //         },

  //       });
  //       console.log("calling api", response.data);
  //     })
  //     .catch((err) => {
  //       console.log("getItems request failed: ", err);
  //     });
  // }

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
            score: 0,
            displayAnswer: false,
            selected: '',
          },
        });
        console.log("calling api", response.data);
      })
      .catch((err) => {
        console.log("getItems request failed: ", err);
      });
  }

  // showAnswer() {
  //   // this.setState({

  //   // })
  // }

  // handleChange(event) {
  //   this.setState({
  //     rightAnswer: 'bob'
  //   });
  // }

  displayAnswerFunc() {
    this.setState({
      displayAnswer: !this.state.displayAnswer
    });
    // if (this.state.displayAnswer) {
    //   <div>
    //     return <Answer key={items.rightAnswer} />

    //   </div>
    //}
  }


  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Trivia questions</h1>
        <h3>Score: {items.score} </h3>
        <button type="question" onClick={this.handleClick} onChange={this.displayAnswerFunc}> Click for Trivia question</button>
        <h3>Question</h3>
        <ul> {items.question} </ul>
        <h3>Answers</h3>
        <Answers answers={items} />


        {/* <div className="radio">
          <label>
            <input type='radio' id={items.rightAnswer} name='myRadio' value='radio-1'
              checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {/* <input type="radio" value="option2" checked={this.state.radio === 'option2'} onChange={this.radioChange} /> */}
        {/* <input type="radio" value="rightAnswer" checked={items.rightAnswer} onChange={this.handleChange} /> */}
        {/* {items.rightAnswer}
          </label>
        </div> */}

        {/* <div className="radio">
          <label>
            <input type='radio' id={'radio-2'} name='myRadio' value='radio-2'
              checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {items.wrongAnswer1}
          </label>
        </div> */}

        {/* <div className="radio">
          <label>
            <input type='radio' id={'radio-3'} name='myRadio' value='radio-3'
              checked={this.state.selected === 'radio-3'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {items.wrongAnswer2}
          </label>
        </div> */}

        {/* <div className="radio">
          <label>
            <input type='radio' id={'radio-4'} name='myRadio' value='radio-4'
              checked={this.state.selected === 'radio-4'} onChange={(e) => this.setState({ selected: e.target.value })} />
            {items.wrongAnswer3}
          </label>
        </div> */}

        {/* <div>
          {this.state.displayAnswer && <h1>{items.rightAnswer} </h1>}
          <button type="answer" onClick={this.displayAnswerFunc}>Show/Hide answer</button>
        </div> */}

      </div>

    );
  }
}
export default App;

