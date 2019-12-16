const mysql = require('mysql');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'trivia';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

const saveQuestion = (data) => {
  console.log("we're in the saveDB function", data);
  const info = {
    question: data.question,
    rightAnswer: data.rightAnswer,
    wrongAnswer1: data.wrongAnswer1,
    wrongAnswer2: data.wrongAnswer2,
    wrongAnswer3: data.wrongAnswer3,
    rightCount: 0,
    wrongCount: 0,
  };
  //  connection.query(insert into questions (question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3, rightCount, wrongCount)
  // values (data.question, data.rightAnswer,
  //   data.wrongAnswer1, data.wrongAnswer2,
  //   data.wrongAnswer3, 0, 0))
  connection.query('INSERT INTO questions SET ?', info, (err, bla) => {
    if (err) {
      console.log("uh oh, can't save to DB");
    }
    else {
      console.log("saved to db", bla);
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
