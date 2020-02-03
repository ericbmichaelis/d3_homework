//You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

// Import our CSV data with d3 
d3.csv("Code/assets/data/data.csv").then(function(data) {

    // Visualize the data
    visualize(data);
  });

  var curX = "poverty";
  var curY = "healthcare";

  // Hold the variables 
  var xMin;
  var xMax;
  var yMin;
  var yMax;


// Grab the state
var theState = "<div>" + d.state + "</div>";

// Grab the y value 
var theY = "<div>" + curY + ": " + d[curY] + "%</div>";

// x as poverty 
 if (curX === "poverty") {

// Grab x and %
 theX = "<div>" + curX + ": " + d[curX] + "%</div>";
      }
      else {

      }
// Show the return 
      return theState + theX + theY;
    });

    // Switch the text just clicked to active.
    clickedText.classed("inactive", false).classed("active", true);
  }

  // First grab the min and max values of x and y.
  xMinMax();
  yMinMax();

  // x and y tick counts.
  // Saved as a function for easy mobile updates.
  function tickCount() {
    if (width <= 500) {
      xAxis.ticks(5);
      yAxis.ticks(5);
    }
    else {
      xAxis.ticks(10);
      yAxis.ticks(10);
    }
  }
  tickCount();

  // grouping labels and dots
  var theCircles = svg.selectAll("g theCircles").data(theData).enter()


  





