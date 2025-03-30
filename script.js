// Select all the boxes and buttons
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.expand-btn');

// Loop through the buttons and add event listeners
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const box = boxes[index];
        const options = box.querySelector('.options');

        // Toggle the expansion state of the box
        box.classList.toggle('expanded');

        // Toggle the visibility of the options (color & size pickers)
        if (box.classList.contains('expanded')) {
            options.style.display = 'block';
        } else {
            options.style.display = 'none';
        }
    });
});
