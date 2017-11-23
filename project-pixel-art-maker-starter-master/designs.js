// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById("pixel_canvas");

// The following function is the basis for forming the grid based on the data entered by the user.

function makeGrid(height, width) {
    table.innerHTML = "";
    for (let i = 1; i <= height; i++) {
        const newRow = table.insertRow();
        for (let j = 1; j <= width; j++) {
            const newCell = newRow.insertCell();
            newCell.onclick = colorBox;
        };
    };
}

// This changes the colour of the cells in the grid.

const color = document.getElementById("colorPicker");

function colorBox() {
    this.style.background = color.value;
    console.log(this)
};

// The following actually makes the grid.

const sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function() {
    // Submit refreshes the page
    event.preventDefault();
    const height = document.getElementById("input_height").value;
    const width = document.getElementById("input_width").value;
    makeGrid(height, width);
})

//onclick documentation
// https://www.w3schools.com/jsref/event_onclick.asp

//the colour picker documentation in HTML
// https://www.w3schools.com/colors/colors_picker.asp



