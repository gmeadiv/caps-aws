'use strict';

const {Consumer} = require('sqs-consumer');

const queueUrl = 'https://sqs.us-east-1.amazonaws.com/567736933253/meadg-message-queue';

const consumer = Consumer.create({
  queueURL: queueUrl,
  handleMessage: (message) => {
    console.log(message);
  }
});

consumer.start();