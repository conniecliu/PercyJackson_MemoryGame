// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Iterate through each grid item
gridItems.forEach((item, index) => {
    // Create an overlay div for each item
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerText = `Overlay ${index + 1}`; // Customize the content as needed

    // Append the overlay to the grid item
    item.appendChild(overlay);
});