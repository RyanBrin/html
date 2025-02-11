// script.js

// Change the background color of the body
document.body.style.backgroundColor = "Black";

// Change the font family of the headers
document.getElementById('mainHeader').style.fontFamily = 'Monospace';
document.getElementById('mainHeader').style.fontSize = '256px';
document.getElementById('subHeader').style.fontFamily = 'Monospace';

// Make the header blink Christmas colors
function blink() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    let index = 0;

    setInterval(function() {
        document.getElementById('mainHeader').style.color = colors[index];
        document.getElementById('subHeader').style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 50);
}

function subSizeChanger() {
    let textSize = 0;
    let increasing = true; // Flag to track whether we're increasing or decreasing

    setInterval(function() {
        if (increasing) {
            textSize += 4;
            document.getElementById('subHeader').style.fontSize = textSize + 'px';
            if (textSize >= 128) {
                increasing = false;

            }
        } else {
            textSize -= 4;
            document.getElementById('subHeader').style.fontSize = textSize + 'px';
            if (textSize <= 0) {
                increasing = true;
            }
        }
    }, 50);
}

function mainSizeChanger() {
    let textSize = 0;
    let increasing = true; // Flag to track whether we're increasing or decreasing

    setInterval(function() {
        if (increasing) {
            textSize += 4;
            document.getElementById('mainHeader').style.fontSize = textSize + 'px';
            if (textSize >= 256) {
                increasing = false;

            }
        } else {
            textSize -= 4;
            document.getElementById('mainHeader').style.fontSize = textSize + 'px';
            if (textSize <= 0) {
                increasing = true;
            }
        }
    }, 50);
}


blink();
subSizeChanger();
mainSizeChanger();