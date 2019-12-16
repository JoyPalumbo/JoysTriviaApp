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
        wrongAnswer4: '',
        rightCount: 0,
        wrongCount: 0;
      },
    };
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
    console.log("we're clicking");
    return axios.post('/items')
      .then(response => response.data)
      .catch(err => {
        console.log("get request failed", err);
      })
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Trivia questions</h1>
        <button onClick={this.getItems}> Click for Trivia question</button>
        <List items={items} />
      </div >
    );
  }
}

export default App;
