// Function to check if there are any good arrows in the quiver
function anyArrows(arrows) {
    // Use the some method to check if there is at least one arrow without damage (damaged: false or not present)
    return arrows.some(arrow => !arrow.damaged);
  }