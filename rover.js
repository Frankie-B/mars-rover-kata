 // Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{x:0, y:0}]
};


// ======================
function turnLeft(){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';      
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;     
  }
  console.log("turnLeft was called! Rover is now facing " + `${rover.direction}`);
}

function turnRight(){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.dirction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log('turnRight was called! Rover is now face ' + rover.direction);
}

function moveForward(){
  switch(rover.direction){
    case 'N':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
    case 'S':
      rover.y--;
      break;
    case 'W':
      rover.x--;
      break;
  }
  console.log("moveForward was called New position of rover is " + rover.x, rover.y);
  let coordinates = {x:rover.x, y:rover.y};
  rover.travelLog.push(coordinates); 
}

function commands(str) {
  for(let i = 0; i < str.length; i++) {
    switch(true) {
      case str[i] === 'f':
        moveForward();
        break;
      case str[i] === 'l':
        turnLeft();
        break;
      case str[i] === 'r':
        turnRight();
        break;
    }
  }
}

commands('rffrfflfrff');


rover.travelLog.forEach(coord => {
  console.log(`rover is now on position x: ${coord.x}, and y: ${coord.y}`);
});

// =================================================================
// TODO if i have time at the end 

/*
Below are some additional(Bonus) tasks for this particular challenge

Bonus 1 | Enforce Boundaries

At some point, you may have accidentally run our rover off of the grid. If you recall, our grid is 10x10.

Make sure your rover doesn't accidentally roam off the map!
Bonus 2 | Move Backwards

Create another function called moveBackward() that will move the rover back. This will be very similar to the moveForward() function.
Bonus 3 | Validate Inputs

If we enter a letter into our inputs that isn't a rover command, nothing happens. For example, ffzzy would simply move forward twice. Add validation so that the inputs must be f, b, r, or l.
Bonus 4 | Obstacles

The following requires you to actually create a grid for the rover to move around on. In code, these grids are often represented as two-dimensional arrays.

    Obstacles - Create obstacles for the rover. If the rover's next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.

 */
