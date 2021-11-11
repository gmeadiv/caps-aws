'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'})

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-1:567736933253:meadg-message';

const payload = {
  Message: 'hello',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error, '<-- ERROR --<<')
  });