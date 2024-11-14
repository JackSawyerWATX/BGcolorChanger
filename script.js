// Generate all possible hex colors
function generateAllHexColors() {
    let hexColors = [];

    // Loop through all values for each color component (00 to FF in hex)
    for (let r = 0; r <= 255; r++) {
        for (let g = 0; g <= 255; g++) {
            for (let b = 0; b <= 255; b++) {
                // Convert to hex and format to 2 digits
                const hexColor = `#${padZero(r.toString(16))}${padZero(g.toString(16))}${padZero(b.toString(16))}`;
                hexColors.push(hexColor);
            }
        }
    }

    return hexColors;
}

// Ensure that the hex value is always 2 digits (e.g., "05" instead of "5")
function padZero(str) {
    return str.length === 1 ? '0' + str : str;
}

// Get all possible hex colors
const allHexColors = generateAllHexColors();
console.log(allHexColors.slice(0, 10)); // Display only the first 10 colors for performance reasons

// Select the button and other elements
const button = document.getElementById("btn");
const bgHexCodeElement = document.getElementById("bg-hex-code");

// Function to generate a random index and change background color
function changeBackgroundColor() {
    // Get a random color from the allHexColors array
    const randomColor = allHexColors[Math.floor(Math.random() * allHexColors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Update the hex code on the page
    bgHexCodeElement.textContent = randomColor;
}

// Add event listener to the button to trigger the color change
button.addEventListener("click", changeBackgroundColor);
