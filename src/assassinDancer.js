var makeAssassinDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'assassin');
  // this.$node = $('<span class="assassin"></span>');
  // makeDancer.prototype.setPosition.call(this, top, left);
};

makeAssassinDancer.prototype = Object.create(makeDancer.prototype);
makeAssassinDancer.prototype.constructor = makeAssassinDancer;
makeAssassinDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};
makeAssassinDancer.prototype.lineUp = function (height) {
  makeDancer.prototype.setPosition.call(this, height, 0);
};