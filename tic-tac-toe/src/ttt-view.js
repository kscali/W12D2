class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', event => {
      const cell = event.currentTarget;
      const $cell = $(cell);
      this.makeMove($cell);
    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    // const $pos = $(pos);
    const player = this.game.currentPlayer;
    
    if (!this.game.isOver()) {
      this.game.playMove(pos);
      let background = $square.text(player);
      background.addClass("white");
    }

    if (this.game.isOver() && this.game.winner() === null ) {
      let $p = $('<p> It was a tie!</p>');
      this.$el.append($p);
    }

    if (this.game.isOver() && this.game.winner()) {
      let $p = $('<p> You win! </p>');
      this.$el.append($p);
    }
   }


  setupBoard() {
    let $ul = $('<ul>');
    for (let i = 0; i < 9; i++) {
      let $li = $('<li>');
      $li.data('pos', [Math.floor(i/3), i%3]);
      $ul.append($li);
    }
    this.$el.append($ul);
  }
}

module.exports = View;
