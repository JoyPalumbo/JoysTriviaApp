const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { apiRouter } = require('./api');
// const getQuestions = require('./helpers');

const app = express();

const PORT = process.end.DB_PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(CLIENT_PATH));
app.use('/', apiRouter);


// apiRouter.get('/', (req, res) => {
//   res.send("hello from server");
// });
// app.post('/', (req, res) => {
//   getQuestions.getQuestions();
// });

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
