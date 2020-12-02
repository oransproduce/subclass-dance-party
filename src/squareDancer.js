// var makeSquareDancer = function (top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps, 'square');
//   // this.$node.mouseover(function() {

//   //   $(this).append($('<img src="Images/assassinDancer.gif">'));
//   // });
//   this.height = 100;
//   $(this.$node).append($('<img src="Images/masterChief.gif">'));

//   $(this.$node).one('mouseover', function () {
//     // $(".square").hover(
//     //   function() {
//     //     $(this).attr("src", "masterChief.gif");},
//     //   function() {
//     //     $(this).attr("src", "assassinDancer.gif");
//     //   });
//     // this.$node = $('<span class="square"></span>');
//     $(this).empty();
//     $(this).append($('<span class="square"><img src="Images/assassinDancer.gif"></span>'));
//     //$(this).attr('src', 'Images/assassinDancer.gif');
//     $(this).css('border', 0);
//   });
//   // makeDancer.prototype.setPosition.call(this, top, left);
// };

// makeSquareDancer.prototype = Object.create(makeDancer.prototype);
// makeSquareDancer.prototype.constructor = makeSquareDancer;

// makeSquareDancer.prototype.step = function () {
//   makeDancer.prototype.step.call(this);
// };

// makeSquareDancer.prototype.lineUp = function (total) {
//   makeDancer.prototype.setPosition.call(this, total, 0);
// };

var MakeSquareDancer = class extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps, 'square');
    this.height = 100;
    $(this.$node).append($('<img src="Images/masterChief.gif">'));

    $(this.$node).one('mouseover', function () {
      $(this).empty();
      $(this).append($('<span class="square"><img src="Images/assassinDancer.gif"></span>'));
      $(this).css('border', 0);
    });
  }
  step() {
    super.step();
  }

  lineUp(total) {
    super.setPosition(total, 0);
  }
};