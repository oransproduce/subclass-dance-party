var makeSquareDancer = function (top, left, timeBetweenSteps) {
  debugger;
  makeDancer.call(this, top, left, timeBetweenSteps, 'square');
  // this.$node = $('<span class="square"></span>');
  // makeDancer.prototype.setPosition.call(this, top, left);
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};

makeSquareDancer.prototype.lineUp = function (height) {
  makeDancer.prototype.setPosition.call(this, height, 0);
};