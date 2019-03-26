
class HanoiView {
  
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
     
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul>');
      for (let j = 0; j < 3; j++) {
        let $li = $('<li>');
        if (i === 0) {
          $li.addClass("disc").addClass(`disc-${j+1}`);
        } 
        
        $ul.append($li);
      }
    this.$el.append($ul);
    }
  }

  render() {
    // let $disc = this.$el.find("ul");
    // let $ul = $disc.removeClass("selected");
    // let $li = $ul.find("li");
    // someElement.addClass($li[0].removeClass());

  }



}

module.exports = HanoiView;