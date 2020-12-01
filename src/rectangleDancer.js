var makeRectangleDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, 'rectangle');
  // this.$node = $('<span class="rectangle"></span>');
  // makeDancer.prototype.setPosition.call(this, top, left);
};

makeRectangleDancer.prototype = Object.create(makeDancer.prototype);
makeRectangleDancer.prototype.constructor = makeRectangleDancer;

makeRectangleDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};

makeRectangleDancer.prototype.lineUp = function (height) {
  makeDancer.prototype.setPosition.call(this, height, 0);
};