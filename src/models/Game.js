'use strict';

const Player = require('./Player.js');

class Game {
  constructor(RL) {
    this.name = RL.question('What is the name of the game: ');
    this.countPlayers = RL.questionInt('How many players will participate: ');
    this.players = this.initPlayers(RL);

    console.log(this);
  }

  initPlayers(RL) {
    const players = [];

    for (let i = 0; i < this.countPlayers; i++) {
      const playerName = RL.question(`Print name for Player ${i + 1}? `);

      players.push(new Player(playerName));
    }

    return players;
  }
}

module.exports = Game;
