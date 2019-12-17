const axios = require('axios');

// saveQuestions = function () {

// };

const getQuestions = function () {
  const options = {
    url: 'https://opentdb.com/api.php?amount=1&type=multiple'


  }
  return axios.get(options.url)
    .then((response) => {
      console.log('got data from apit', response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    })
};

module.exports.getQuestions = getQuestions;
