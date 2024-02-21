// Sample data structure
let books = {
    "ics108": {row: 1, column: 2, shelf: 3},
    "ics344": {row: 2, column: 3, shelf: 4},
    "ics343": {row: 3, column: 4, shelf: 5},
    "ics104": {row: 4, column: 5, shelf: 6},
    "ics208": {row: 5, column: 6, shelf: 7},
    "coe200": {row: 5, column: 6, shelf: 7},
};

// Autocomplete feature
let input = document.getElementById('courseNumber');
input.addEventListener('input', updateSuggestions);

function updateSuggestions() {
    let inputValue = input.value.toLowerCase().replace(/\s/g, '');
    let suggestions = [];

    if (inputValue !== '') {
        suggestions = Object.keys(books).filter(book => book.startsWith(inputValue));
    }

    // Clear previous suggestions
    let suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.innerHTML = '';

    // Create new suggestions
    suggestions.forEach(suggestion => {
        let option = document.createElement('option');
        option.value = suggestion;
        suggestionBox.appendChild(option);
    });
}
// Search function
function searchBook() {
    let courseNumber = document.getElementById('courseNumber').value.toLowerCase().replace(/\s/g, '');
    let result = books[courseNumber];
    if(result) {
        document.getElementById('result').innerText = `Row: ${result.row}, Column: ${result.column}, Shelf: ${result.shelf}`;
    } else {
        document.getElementById('result').innerText = "Book not found.";
    }
}