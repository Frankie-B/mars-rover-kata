// Rover Object Goes Here
/*
 Instructions:
 In order to move the move the rover enter use keys 'f''b''l''r'
 to move forward, backward, left and right. then run code(or hit Ctrl + Enter) to display the new position of the rover. 
 
 A warning message will appear if you exceed the boundries the rover is able to move beyond.

  */
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
};

const gridEdge = 'Position out of bounds! Rover cannot move here!';

const invalidKey = 'ERROR! Invalid command! Please press valid key';

// ======================
function turnLeft() {
  switch (rover.direction) {
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
  console.log(
    'turnLeft was called! Rover is now facing ' + `${rover.direction}`
  );
}

function turnRight() {
  switch (rover.direction) {
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

/*
Will move the rover forward - Bonus 1 will also enforce 10 x 10 boundry and  log error if position it outside of allowed grid space.
 */
function moveForward() {
  switch (rover.direction) {
    case 'N':
      if (rover.y <= 9) {
        rover.y++;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'E':
      if (rover.x <= 9) {
        rover.x++;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'S':
      if (rover.y >= -9) {
        rover.y--;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'W':
      if (rover.x >= -9) {
        rover.x--;
      } else {
        console.log(gridEdge);
      }
      break;
    default:
      console.lgo(gridEdge);
  }
  console.log(
    'moveForward was called New position of rover is ' + rover.x,
    rover.y
  );
  let coordinates = { x: rover.x, y: rover.y };
  rover.travelLog.push(coordinates);
}

/*
Bonus 2 move rover backward.

Will move the rover backward - Bonus 1 will also enforce 10 x 10 boundry and  log error if position it outside of allowed grid space.
 */
function moveBackward() {
  switch (rover.direction) {
    case 'N':
      if (rover.y <= 9) {
        rover.y--;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'E':
      if (rover.x <= 9) {
        rover.x--;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'S':
      if (rover.y >= -9) {
        rover.y++;
      } else {
        console.log(gridEdge);
      }
      break;
    case 'W':
      if (rover.x >= -9) {
        rover.x++;
      } else {
        console.log(gridEdge);
      }
      break;
    default:
      console.log(gridEdge);
      break;
  }
  console.log(
    'moveBackward was called New position of rover is ' + rover.x,
    rover.y
  );
  let coordinates = { x: rover.x, y: rover.y };
  rover.travelLog.push(coordinates);
}

function commands(str) {
  for (let i = 0; i < str.length; i++) {
    switch (true) {
      case str[i] === 'f':
        moveForward();
        break;
      case str[i] === 'b':
        moveBackward();
        break;
      case str[i] === 'l':
        turnLeft();
        break;
      case str[i] === 'r':
        turnRight();
        break;
      default:
        console.log(invalidKey);
        break;
    }
  }
}

/*
Bonus 3 - validate command input.

Command input must be a valid key ('f''b''l''r') all other entries will log an error.
 */

commands('s');

// Out put the current location of the rover.
rover.travelLog.forEach(coord => {
  console.log(`rover is now on position x: ${coord.x}, and y: ${coord.y}`);
});

/*
Bouns 4
The following requires you to actually create a grid for the rover to move around on. In code, these grids are often represented as two-dimensional arrays.

    Obstacles - Create obstacles for the rover. If the rover's next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
 */
