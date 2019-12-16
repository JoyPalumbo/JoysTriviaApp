import React from 'react';
import axios from 'axios';

import List from './List.jsx';
import ListItem from './ListItem.jsx';

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
      },
    };
    this.handleClick = this.handleClick.bind(this);
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

  getItems() {
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
  }


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
    return axios.get('/question')
      .then((response) => {

        console.log("calling api", response.data);
      })
      .catch((err) => {
        console.log("getItems request failed: ", err);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Trivia questions</h1>
        <button onClick={this.handleClick}> Click for Trivia question</button>
        {/* <li> {items.question} </li> */}
        {/* <List items={items} /> */}
      </div>
    );
  }
}

export default App;
