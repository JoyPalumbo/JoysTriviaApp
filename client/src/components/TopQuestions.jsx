import React from 'react';
import Axios from 'axios';

class TopQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      topQuestions: [],
    };
  }
  // this.componentDidMount = this.componentDidMount.bind(this);


  componentDidMount() {
    Axios.get('/topVotes')
      .then((response) => {
        const top = response.data;
        console.log("checking response.data", response.data);

        this.setState({ topQuestions: response.data });
      });
  }

  render() {

    const { topQuestions } = this.state.topQuestions;
    console.log("trying to get question array", this.state.topQuestions);

    return (

      <div>
        <h2>Top voted questions</h2>
        {this.state.topQuestions.map((question) => {
          return (
            <div>
              <h4>{question.question}</h4>
            </div>
          );
        })}
        {/* <button onClick={this.}>Get top voted questions</button> */}
      </div>
    )
  }
}
export default TopQuestions;
