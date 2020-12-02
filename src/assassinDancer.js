// var MakeBlinkyDancer = class extends MakeDancer {
//   constructor(top, left, timeBetweenSteps) {
//     debugger;
//     super(top, left, timeBetweenSteps);
//     this.height = 45;
//     this.$node.append($('<img src="Images/teemoDancer.gif">'));
//   }
//   step () {
//     super.step();
//     // a way to make it toggle
//     this.$node.toggle();
//   }
//   lineUp (total) {
//     super.setPosition(total, 0);
//   }
// };
var MakeAssassinDancer = class extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps, 'assassin');
    this.height = 25;
    this.$node.append($('<img src="Images/assassinDancer.gif">'));
  }
  step () {
    super.step();
  }
  lineUp (total) {
    super.setPosition(total, 0);
  }
};
// var makeAssassinDancer = function (top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps, 'assassin');
//   this.$node.append($('<img src="Images/assassinDancer.gif">'));
//   this.height = 25;
// };

// makeAssassinDancer.prototype = Object.create(makeDancer.prototype);
// makeAssassinDancer.prototype.constructor = makeAssassinDancer;
// makeAssassinDancer.prototype.step = function () {
//   makeDancer.prototype.step.call(this);
// };
// makeAssassinDancer.prototype.lineUp = function (total) {
//   makeDancer.prototype.setPosition.call(this, total, 0);
// };