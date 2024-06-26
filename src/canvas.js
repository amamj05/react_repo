const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a 500x500 canvas
const canvas = createCanvas(500, 500);
const ctx = canvas.getContext('2d');

// Draw diary
ctx.fillStyle = 'rgba(139, 69, 19, 1)'; // Matte brown color
ctx.fillRect(100, 200, 300, 400);

// Draw pages
ctx.fillStyle = 'rgba(245, 245, 220, 1)'; // Beige color
ctx.fillRect(120, 220, 260, 360);

// Draw sprout
ctx.fillStyle = 'rgba(60, 179, 113, 1)'; // Matte green color
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(230, 150);
ctx.lineTo(270, 150);
ctx.closePath();
ctx.fill();

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./diary-sprout.png', buffer);
