'use strict';

const KeepingScoreCLI = require('./cli/KeepingScoreCLI.js');
const getCommand = require('./cli/commands.js');
const readline = require('readline');

const bootstrap = () => {
  const app = new KeepingScoreCLI(readline, getCommand);

  app.RL.prompt();

  app.RL
    .on('line', line => {
      const command = app.getCommand(line.trim());
      if (command) command(app.RL);
      app.RL.prompt();
    })
    .on('close', () => {
      console.log('Bye!');
      process.exit(0);
    });
};

bootstrap();
