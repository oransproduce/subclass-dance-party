var makeExpanderDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 100, 'expander');
  this.border = 2;
  this.count = 1;
  this.height = 60;
  // this.$node = $('<span class="rectangle"></span>');
  // makeDancer.prototype.setPosition.call(this, top, left);

};

makeExpanderDancer.prototype = Object.create(makeDancer.prototype);
makeExpanderDancer.prototype.constructor = makeExpanderDancer;

makeExpanderDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  if (this.count === 30) {
    this.border = 2;
    this.count = 1;
  }
  this.border++;
  this.$node.css('border-width', this.border);
  this.count++;
};

makeExpanderDancer.prototype.lineUp = function(total) {
  makeDancer.prototype.setPosition.call(this, total, 0);
};
