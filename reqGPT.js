const syncRequest = require('sync-request');

const model_engine = 'gpt-3.5-turbo';
const api_key = process.env.OPENAI_KEY;
const messages = [];

function getAnswer(questionFromSubscriber) {
  const prompt = questionFromSubscriber;
  const res = syncRequest('POST', 'https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    },
    json: {
      messages: [{role: 'user', content: `${prompt}`}],
      model: model_engine,
      max_tokens: 150,
      n: 1,
      stop: '\n',
    },
  });
  let resp = JSON.parse(res.getBody()).choices[0].message.content;
  console.log(resp);
  return(resp);
};

module.exports = {
  getAnswer
};
