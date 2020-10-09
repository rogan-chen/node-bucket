require('./index.css');

const img_1 = require('./resource/1.jpg');
const img = new Image();
img.src = img_1;
img.style.width = '100px';
img.style.height = '100px';
img.style.marginTop = '2opx';
document.body.appendChild(img);