describe('rectangleDancer', function() {

  var rectangleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // added in new keyword for pseudoclassical instanstiation
    rectangleDancer = new makeRectangleDancer(10, 20, timeBetweenSteps, 'assassin');
  });

  it('should have a jQuery $node object', function() {
    expect(rectangleDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rectangleDancer, 'step');
      expect(rectangleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rectangleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rectangleDancer.step.callCount).to.be.equal(2);
    });
  });
});