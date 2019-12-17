const { Router } = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const apiRouter = Router();
const getQuestions = require('./helpers');
const saveQuestions = require('./db/index');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// TODO: Your routes here!
// apiRouter.get('/', (req, res) => {

// });

apiRouter.get('/api/question', (req, res) => {
  console.log("we are in apiRouter.get");
  getQuestions.getQuestions()
    .then(response => {
      // const reg = response.results[0].question.replace(new RegExp('&#039;', 'g'), "");

      const reg = response.results[0].question.replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), "");
      console.log("rejex example: ", reg, response.results[0].question);
      const saveData = {
        question: response.results[0].question.replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), ""),
        rightAnswer: response.results[0].correct_answer.replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), ""),
        wrongAnswer1: response.results[0].incorrect_answers[0].replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), ""),
        wrongAnswer2: response.results[0].incorrect_answers[1].replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), ""),
        wrongAnswer3: response.results[0].incorrect_answers[2].replace(new RegExp('&quot;', 'g'), "").replace(new RegExp('&#039;', 'g'), ""),
        rightCount: 0,
        wrongCount: 0,
      }
      //pass saveData into save function
      saveQuestions.saveQuestion(saveData);
      console.log("we're hitting apiRouter.post", response.results[0].question);
      res.send(saveData);
    })
    .catch(err => {
      console.log("uh oh apiRouter.post not working", err);
    })
});


module.exports.apiRouter = apiRouter;
