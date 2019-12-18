const mysql = require('mysql');
const .env = require(.env');
  .env.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
} = process.env;

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'trivia';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const getTop = (callback) => {
  console.log("getting topVotes");
  connection.query('select question from questions where vote > 2', (err, question) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, question);
    }
  });
};

// const getTop = () => new Promise((resolve, reject) => {
//   console.log("getting topVotes");
//   return connection.query('select question from questions where vote > 2 limit 5', (err, question) => {
//     if (err) {
//       console.log("didnt get top questions", err);
//     }
//     else {
//       console.log("got top questions", question);
//     }
//   });
// });

const saveVote = ({ question, vote }) => {
  // const questionString = "'" + question + "'";
  // const vote1 = vote;
  // console.log("saving vote to db", questionString);
  connection.query('update questions set vote = ? where question = ?',
    [vote, question], (err, woot) => {
      if (err) {
        console.log("didn't save vote", err);
      }
      else {
        console.log("saved vote to db", woot);
      }
    });
};

const saveQuestion = (data) => {
  console.log("we're in the saveDB function", data);
  const info = {
    question: data.question,
    rightAnswer: data.rightAnswer,
    wrongAnswer1: data.wrongAnswer1,
    wrongAnswer2: data.wrongAnswer2,
    wrongAnswer3: data.wrongAnswer3,
    vote: 0,
  };
  //  connection.query(insert into questions (question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3, rightCount, wrongCount)
  // values (data.question, data.rightAnswer,


  connection.query('INSERT INTO questions SET ?', info, (err, bla) => {
    if (err) {
      console.log("uh oh, can't save to DB");
    }
    else {
      console.log("saved to db");
    }
  });
};

const getQuestion = (callback) => {
  // TODO: Your code here!
  connection.query('select * from questions');
};

const getWrongQuestions = () => {

};

module.exports.getQuestion = getQuestion;
module.exports.saveQuestion = saveQuestion;
module.exports.getWrongQuestions = getWrongQuestions;
module.exports.saveVote = saveVote;
module.exports.getTop = getTop;
