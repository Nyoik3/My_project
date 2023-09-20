// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the input display
    const input = document.getElementById('input');

    // Add event listeners to all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Get the button's text (value)
            const buttonText = button.textContent;

            // Handle different button types
            switch (button.id) {
                case 'ac':
                    // Clear the input display
                    input.textContent = '0';
                    break;
                case 'de':
                    // Delete the last character
                    input.textContent = input.textContent.slice(0, -1) || '0';
                    break;
                case 'equals':
                    try {
                        // Evaluate the expression in the input display
                        const result = eval(input.textContent);
                        // Display the result
                        input.textContent = result;
                    } catch (error) {
                        // Handle errors (e.g., division by zero)
                        input.textContent = 'Error';
                    }
                    break;
                default:
                    // Append the button's text to the input display
                    if (input.textContent === '0' || input.textContent === 'Error') {
                        input.textContent = buttonText;
                    } else {
                        input.textContent += buttonText;
                    }
                    break;
            }
        });
    });
});
