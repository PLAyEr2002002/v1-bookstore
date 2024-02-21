// Sample data structure
let books = {
    "coe451": { name: "Information security : principles and practice / Mark Stamp. " , row: 1, column: 1 , shelf: 5},
    "coe449": { name: "Computer security : principles and practice / William Stallings, Lawrie Brown ; with contributions by Mick Bauer [and] Michael Howard.", row: 1, column: 1 , shelf: 4},
    "coe444": { name:" Top-down network design / Priscilla Oppenheimer." , row: 1, column: 1 , shelf: 3},
    "coe436": { name: "Top-down network design / Priscilla Oppenheimer." , row: 1, column: 1 , shelf: 3},
    "coe405": { name: "Advanced digital design with the Verilog HDL / Michael D. Ciletti" , row: 1, column: 1 , shelf: 2},
    
    // "coe403": { name:, row: 1, column: 2 , shelf: 6},
    // "coe361": { name:, row: 1, column: 2 , shelf: 6},
    // "coe353": { name: Business data communications and networking / Jerry FitzGerald, Jerry FitzGerald & Associates, Alan Dennis, Indiana University, Alexandra Durcikova, University of Arizona , row: 1, column: 2 , shelf: 5},
    // "coe344": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 2 , shelf: 5},
    // "coe306": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 2 , shelf: 5},
    // "coe301": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 2 , shelf: 5},
    // "coe233": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 2 , shelf: 5},
    
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    // "coe451": { name: Information security : principles and practice / Mark Stamp. , row: 1, column: 1 , shelf: 5},
    
    
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
        // document.getElementById('result').innerText = `Book Name: ${result.name} Row: ${result.row}, Column: ${result.column}, Shelf: ${result.shelf}`;
        document.getElementById('bookname').innerText = `Book Name: ${result.name}`;
        document.getElementById('row').innerText = `Row: ${result.row}`;  
        document.getElementById('column').innerText = `Column: ${result.column}`;
        document.getElementById('shelf').innerText = `Shelf: ${result.shelf}`;      
    } else {
        document.getElementById('result').innerText = "Book not found.";
    }
}