'use strict';

class KeepingScoreCLI {
  constructor(readline, getCommand) {
    this.RL = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });

    this.getCommand = getCommand;
  }
}

module.exports = KeepingScoreCLI;
