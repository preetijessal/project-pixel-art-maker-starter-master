// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById("pixel_canvas");

// The following function is the basis for forming the grid based on the data entered by the user.

function makeGrid(height, width) {
    table.innerHTML = "";
    for (let h = 1; h <= height; h++) {
        const newRow = table.insertRow();
        for (let w = 1; w <= width; w++) {
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
    // Submit refreshes the page and we want to stop that in this case.
    event.preventDefault();
    const height = document.getElementById("input_height").value;
    const width = document.getElementById("input_width").value;
    makeGrid(height, width);
})

//onclick documentation
// https://www.w3schools.com/jsref/event_onclick.asp

//the colour picker documentation in HTML
// https://www.w3schools.com/colors/colors_picker.asp



