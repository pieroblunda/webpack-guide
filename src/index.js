import _ from 'lodash';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';
var css = require('./main.styl');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  
  console.log(Data);

  return element;
}

document.body.appendChild(component());