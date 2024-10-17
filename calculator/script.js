// Select the theme button and the calculator element
const themeButton = document.getElementById('theme-button');
const calculator = document.querySelector('.calculator');

// Toggle dark mode when the theme button is clicked
themeButton.addEventListener('click', () => {
    calculator.classList.toggle('dark-mode'); // Apply dark mode only to the calculator
});

// Dummy calculator functionality (for button clicks)
const display = document.getElementById('current-operand');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const number = button.textContent;

        if (action === 'all-clear') {
            display.textContent = '0';
        } else if (action === 'clear') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else if (action === 'percentage') {
            display.textContent = (parseFloat(display.textContent) / 100).toString();
        } else if (action === 'decimal') {
            if (!display.textContent.includes('.')) {
                display.textContent += '.';
            }
        } else if (action === 'equals') {
            try {
                display.textContent = eval(display.textContent.replace('÷', '/').replace('×', '*'));
            } catch {
                display.textContent = 'Error';
            }
        } else {
            // Handle numbers and operators
            if (display.textContent === '0') {
                display.textContent = number;
            } else {
                display.textContent += number;
            }
        }
    });
});
