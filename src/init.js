$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function(event) {
    total = 0;
    window.dancers.forEach(function(item, index) {
      total += item.height;
      item.lineUp(total + 32);

    });
  });
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancerHeight = $("body").height() * Math.random() + 100;
    var dancerLeft = $("body").width() * Math.random();
    var dancer = new dancerMakerFunction(
      dancerHeight,
      dancerLeft,
      Math.random() * 1000
    );
    // if this dancer is an assasin:
    if (dancerMakerFunctionName === 'makeAssassinDancer') {
      // loop through windows.dancer array and calculate distance of each dancer in array to current assassinDancer
      window.dancers.forEach(function(dancer) {
        // if that distance is within a certain length, we mimic the logic of set position to change that elements css to a new color
        var distance = Math.sqrt(Math.pow(dancer.top - dancerHeight, 2) + Math.pow(dancer.left - dancerLeft, 2));
        if (distance < 250 && !(dancer instanceof makeAssassinDancer || dancer instanceof makeSquareDancer)) {
          dancer.$node.css('background-color', 'rgba(0, 255, 0, 0.3)');
        }
        if (distance < 250 && dancer instanceof makeExpanderDancer) {
          dancer.$node.css('border-color', 'rgba(0, 255, 0, 0.5)');
        }
      });
    }

    $('body').append(dancer.$node);
    // push new dancer instance into window.dancers for line up method
    window.dancers.push(dancer);
  });
});

