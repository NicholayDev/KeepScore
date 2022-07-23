'use strict';

class Player {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.score = 0;
  }
}

module.exports = Player;
