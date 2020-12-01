describe('expander', function() {

  var expanderDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // added in new keyword for pseudoclassical instanstiation
    expanderDancer = new makeExpanderDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(expanderDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it expand', function() {
    expect(expanderDancer.border).to.be.equal(2);
    expanderDancer.step();
    expect(expanderDancer.border).to.be.equal(3);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(expanderDancer, 'step');
      expect(expanderDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(expanderDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(expanderDancer.step.callCount).to.be.equal(2);
    });
  });
});
