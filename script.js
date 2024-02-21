// Sample data structure
window.addEventListener('load', () => {
    const darkSwitch = document.getElementById('darkSwitch');
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');

    // Set initial state of the icons
    sunIcon.style.display = darkSwitch.checked ? 'none' : 'inline';
    moonIcon.style.display = darkSwitch.checked ? 'inline' : 'none';

    darkSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        sunIcon.style.display = darkSwitch.checked ? 'none' : 'inline';
        moonIcon.style.display = darkSwitch.checked ? 'inline' : 'none';
    });
});


let books = {
    // column 1
    "coe451": { name: "Information security : principles and practice / Mark Stamp. " , row: 1, column: 1 , shelf: 5},
    "coe449": { name: "Computer security : principles and practice / William Stallings, Lawrie Brown ; with contributions by Mick Bauer [and] Michael Howard.", row: 1, column: 1 , shelf: 4},
    "coe444": { name:" Top-down network design / Priscilla Oppenheimer." , row: 1, column: 1 , shelf: 3},
    "coe436": { name: "Top-down network design / Priscilla Oppenheimer." , row: 1, column: 1 , shelf: 3},
    "coe405": { name: "Advanced digital design with the Verilog HDL / Michael D. Ciletti" , row: 1, column: 1 , shelf: 2},
    
    // column 2
    "coe403": { name: "Book name not available", row: 1, column: 2 , shelf: 6},
    "coe361": { name:"Book name not available", row: 1, column: 2 , shelf: 6},
    "coe353": { name: "Business data communications and networking / Jerry FitzGerald, Jerry FitzGerald & Associates, Alan Dennis, Indiana University, Alexandra Durcikova, University of Arizona" , row: 1, column: 2 , shelf: 5},
    "coe344": { name: "Computer networking : a top-down approach / James F. Kurose, Keith W. Ross." , row: 1, column: 2 , shelf: 4},
    "coe306": { name: "Computers as components : principles of embedded computing system design / Marilyn Wolf" , row: 1, column: 2 , shelf: 3},
    "coe301": { name: "Computer organization and design. Patterson, John L. Hennessy : the hardware/software interface / David A. Patterson, John L. Hennessy." , row: 1, column: 2 , shelf: "1,2"},
    "coe233": { name: "Computer organization and design. Patterson, John L. Hennessy : the hardware/software interface / David A. Patterson, John L. Hennessy." , row: 1, column: 2 , shelf: "1,2"},
    "coe233": { name: "Computer organization and design.feld, John L. Hennessy : the hardware/software interface / David A.feld, John L. Hennessy." , row: 1, column: 2 , shelf: "1,2"},

    // column 3    
    "coe241": { name:"Data and computer communications / William Stallings"  , row: 1, column: 3 , shelf: 5},
    "coe300": { name: "Design for electrical and computer engineers : theory, concepts, and practice / Ralph M. Ford; Chris S. Coulston" , row: 1, column: 3 , shelf: 4},
    "coe202": { name: "Introduction to logic design / Alan B, Marcovitz" , row: 1, column: 3 , shelf: "1,2,3"},
    

    // column 4
    "coe202": { name: "Introduction to logic design / Alan B, Marcovitz" , row: 1, column: 4 , shelf: "5,6"},
    "swe387": { name: "Information technology project management / Kathy Schwalbe, Ph.D., PMP, Professor Emeritus, Augsburg College" , row: 1, column: 4 , shelf: 4},
    "swe416": { name: "Software architecture : foundations, theory, and practice / Richard N. Taylor, Nenad Medvidoviقc, Eric M. Dashofy" , row: 1, column: 4 , shelf: 4},
    "swe469": { name: "Software metrics : a rigorous and practical approach / Norman Fenton, Queen Mary University of London, UK, James Bieman, Colorado State University, Fort Collins, USA" , row: 1, column: 4 , shelf: 4},
    "swe363": { name: "Internet & World Wide Web : how to program / P.J. Deitel, H.M. Deitel" , row: 1, column: 4 , shelf: "1,2,3"},

    // column 5
    // SHELF 5 MIGHT HAVE A UNKNOWN BOOK, CHECK IT OUT
    "swe316": { name: "Software design : from programming to architecture Eric J. Braud" , row: 1, column: 5 , shelf: 5},
    "swe312": { name: "Designing the user interface : strategies for effective human-computer interaction Ben Shneiderman...e[et al]." , row: 1, column: 5 , shelf: 4},
    "swe206": { name: "Software engineering / Ian Sommerville" , row: 1, column: 5 , shelf: "1,2,3"},
    "swe205": { name: "Software engineering / Ian Sommerville" , row: 1, column: 5 , shelf: "1,2,3"},
    

    // column 6
    "ics485": { name: "Neural networks and learning machines / Simon Haykin" , row: 1, column: 6 , shelf: 6},
    "ics489": { name: "Neural networks and learning machines / Simon Haykin    " , row: 1, column: 6 , shelf: 6},
    "ics482": { name: "Speech and language processing : an introduction to natural language processing, computational linguistics, and speech recognition / Daniel Jurafsky, James H. Martin.    " , row: 1, column: 6 , shelf: 5},
    "ics486": { name: "Book name not available" , row: 1, column: 6 , shelf: 4},
    "ics443": { name: "Book name not available" , row: 1, column: 6 , shelf: "2"},
    "ics440": { name: "Book name not available" , row: 1, column: 6 , shelf: 1},
    "ics439": { name: "" , row: 1, column: 6 , shelf: 1},

    // column 7
    "ics431": { name: "Operating system concepts essentials / Abraham Silberschatz, Peter Baer Galvin, Greg Gagne.    " , row: 1, column: 7 , shelf: "5,6"},
    "ics426": { name: "Data mining : concepts and techniques / Jiawei Han, Micheline Kamber, Jian Pei.    " , row: 1, column: 7 , shelf: "3,4"},
    "ics415": { name: "Computer graphics with Open GL / Hearn, Baker, Carithers.    " , row: 1, column: 7 , shelf: 2},
    "ics435": { name: "Computer graphics with Open GL / Hearn, Baker, Carithers.    " , row: 1, column: 7 , shelf: 2},
    "ics410": { name: "Concepts of programming languages Robert W. Sebesta ; global edition contributions by Soumen Mukherjee, Arup Kumar Bhattacharjee    " , row: 1, column: 7 , shelf: 1},

    // column 8
    "ics381": { name: "Artificial intelligence : a modern approach / Stuart J. Russell and Peter Norvig.    " , row: 1, column: 8 , shelf: "5,6"},
    "ics353": { name: "Algorithms : design techniques and analysis M. H. AlSuwaiyel    " , row: 1, column: 8 , shelf: 4},
    "ics355": { name: "Algorithms : design techniques and analysis M. H. AlSuwaiyel    " , row: 1, column: 8 , shelf: 4},
    "ics343": { name: "Data communications and networking / Behrouz A. Forouzan.    " , row: 1, column: 8 , shelf: "2,3"},
    "ics309": { name: "Ethics in information technology / George W. Reynolds.    " , row: 1, column: 8 , shelf: 1},

    // column 9
    "ics253": { name: "" , row: 1, column: 9 , shelf: "5,6"},
    "ics254": { name: "" , row: 1, column: 9 , shelf: "5,6"},
    "ics233": { name: "" , row: 1, column: 9 , shelf: 4},
    "ics202": { name: "" , row: 1, column: 9 , shelf: "1,3"},
    "ics324": { name: "" , row: 1, column: 9 , shelf: 2},
    
    // column 10
    "ics104": { name: "" , row: 1, column: 10 , shelf: "1,2,3,4,5,6"},
    // column 11
    "ics104": { name: "" , row: 1, column: 11 , shelf: "1,2,3,4,5,6"},

    // column 12
    "ics108": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},
    "ics201": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},
    "ics102": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},


    "ics": { name: "" , row: 1, column: 12 , shelf: 1},

    
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
        document.getElementById('columnImage').src= `images/${result.column}.jpg`; 
    } else {
        document.getElementById('result').innerText = "Book not found.";
    }
}


// styling and stuff
// dark mode
