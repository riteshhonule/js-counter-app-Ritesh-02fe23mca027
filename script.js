document.addEventListener('DOMContentLoaded', () => {

    // --- 1. STATE ---
    let count = 0;

    // --- 2. DOM Element Selection ---
    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    // New elements for custom input
    const customValueInput = document.getElementById('custom-value-input');
    const incrementByBtn = document.getElementById('increment-by-btn');
    const decrementByBtn = document.getElementById('decrement-by-btn');

    // --- 3. HELPER FUNCTIONS ---
    // Updates the display with the current count
    const updateDisplay = () => {
        countDisplay.textContent = count;
    };

    // Gets the integer value from the custom input field
    const getCustomValue = () => {
        const value = parseInt(customValueInput.value, 10);
        // Return the parsed value, or 0 if it's not a valid number (e.g., empty input)
        return isNaN(value) ? 0 : value;
    };

    // --- 4. EVENT LISTENERS ---
    // Standard Controls
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateDisplay();
        }
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    // Custom Controls
    incrementByBtn.addEventListener('click', () => {
        const value = getCustomValue();
        count += value;
        updateDisplay();
    });

    decrementByBtn.addEventListener('click', () => {
        const value = getCustomValue();
        // Use Math.max to ensure the count never goes below 0
        count = Math.max(0, count - value);
        updateDisplay();
    });

});