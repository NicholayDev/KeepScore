'use strict';

const commands = {
  help() {
    console.log('Commands:', Object.keys(this).join(', '));
  },
  hello() {
    console.log('Hello there!');
  },
  exit(RL) {
    RL.close();
  }
};

const getCommand = name => {
  const currentCommand = commands[name];

  return currentCommand ?
    currentCommand.bind(commands) :
    console.log('Unknown command');
};

module.exports = getCommand;
