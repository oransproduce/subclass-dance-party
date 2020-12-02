var MakeBlinkyDancer = class extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    debugger;
    super(top, left, timeBetweenSteps);
    this.height = 45;
    this.$node.append($('<img src="Images/teemoDancer.gif">'));
  }
  step () {
    super.step();
    // a way to make it toggle
    this.$node.toggle();
  }
  lineUp (total) {
    super.setPosition(total, 0);
  }
};
// var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.height = 45;
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   // var oldStep = blinkyDancer.step;

//   // blinkyDancer.step = function() {
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   //   // the basic dancer doesn't do anything interesting at all on each step,
//   //   // // it just schedules the next step
//   //   // setTimeout(this.step, timeBetweenSteps);
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   blinkyDancer.$node.toggle();
//   // };

//   // return blinkyDancer;
//   this.$node.append($('<img src="Images/teemoDancer.gif">'));
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function () {
//   // a way to make it loop, but with a timeout between recursive calls
//   makeDancer.prototype.step.call(this);


//   // a way to make it toggle
//   this.$node.toggle();
// };

// makeBlinkyDancer.prototype.lineUp = function (total) {
//   makeDancer.prototype.setPosition.call(this, total, 0);
// };