var pos = 0;
 
let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

var direction = 0;

var focus = 0;

function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
//  The following lines show the status of each variable in the function:
//  console.log('focus is: ' + focus);
//  console.log('pos is: ' + pos);
//  console.log('direction is: ' + direction);
//  console.log('page width is:' + pageWidth);
//  console.log('array is: ' + pacArray[direction][focus]);
}
setInterval(Run,100);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth >= pageWidth) {
    direction = 1;
  } else if (pos < 0) {
    direction = 0;
  }
  return direction;
}

module.exports = checkPageBounds;