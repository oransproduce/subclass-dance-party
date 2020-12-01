var makeAssassinDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'assassin');
  this.$node.append($('<img src="Images/assassinDancer.gif">'));
  this.height = 25;
};

makeAssassinDancer.prototype = Object.create(makeDancer.prototype);
makeAssassinDancer.prototype.constructor = makeAssassinDancer;
makeAssassinDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};
makeAssassinDancer.prototype.lineUp = function (total) {
  makeDancer.prototype.setPosition.call(this, total, 0);
};