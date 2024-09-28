const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const clearCanvasBtn = document.getElementById('clearCanvas');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Initial brush settings
let drawing = false;
let brushColor = colorPicker.value;
let lineWidth = brushSize.value;

// Update brush color and size based on inputs
colorPicker.addEventListener('change', () => {
    brushColor = colorPicker.value;
});

brushSize.addEventListener('change', () => {
    lineWidth = brushSize.value;
});

// Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

// Stop drawing when mouse is released
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});

// Draw on the canvas
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Clear the canvas
clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
