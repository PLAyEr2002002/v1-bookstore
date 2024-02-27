// Sample data structure
let courses = {
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
    "ics253": { name: "Discrete mathematics and its applications / Kenneth H. Rosen adapted by Kamala Krithivasan.    " , row: 1, column: 9 , shelf: "5,6"},
    "ics254": { name: "Discrete mathematics and its applications / Kenneth H. Rosen adapted by Kamala Krithivasan.    " , row: 1, column: 9 , shelf: "5,6"},
    "ics233": { name: "Computer organization and design. Patterson, John L. Hennessy : the hardware/software interface / David A. Patterson, John L. Hennessy.    " , row: 1, column: 9 , shelf: 4},
    "ics202": { name: "Data structures and algorithms in Java / Adam Drozdek.    " , row: 1, column: 9 , shelf: "1,3"},
    "ics324": { name: "Fundamentals of database systems Ramez Elmasri, Shamkant B. Navathe    " , row: 1, column: 9 , shelf: 2},
    
    // column 10
    "ics104": { name: "Problem Solving" , row: 1, column: 10 , shelf: "1,2,3,4,5,6"},
    // column 11
    "ics104": { name: "Problem Solving" , row: 1, column: 11 , shelf: "1,2,3,4,5,6"},

    // column 12
    "ics108": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},
    "ics201": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},
    "ics102": { name: "Absolute Java / Walter Savitch.    " , row: 1, column: 12 , shelf: "1,2,3,4,5,6"},

    // column 13
    "ise480": { name: "Reliability engineering and risk analysis : a practical guide / Mohammad Modarres, Mark P. Kaminskiy, Vasiliy Krivtsov.    " , row: 1, column: 13 , shelf: 6},
    "ise487": { name: "" , row: 1, column: 13 , shelf: 5},
    "ise470": { name: "Designing and managing the supply chain : concepts, strategies, and case studies / David Simchi-Levi; Philip Kaminsky; Edith Simchi-Levi.    " , row: 1, column: 13 , shelf: 4},
    "ise468": { name: "" , row: 1, column: 13 , shelf: 3},
    "ise465": { name: "Occupational safety and health for technologists, engineers, and managers / David L. Goetsch.    " , row: 1, column: 13 , shelf: 2},
    "ise448": { name: "Principles of sequencing and scheduling / Kenneth R. Baker, Dan Trietsch.    " , row: 1, column: 13 , shelf: 1},

    // column 14
    "ise447": { name: "Making hard decisions with DecisionTools® / Robert T. Clemen, Terence Reilly ; with contributions by Samuel E. Bodily and Jeffrey Guyse ; and cases by Samuel E. Bodily [and others].    " , row: 1, column: 14 , shelf: 6},
    "ise429": { name: "Planning and control of maintenance systems : modelling and analysis / Salih O. Duffuaa, A. Raouf.    " , row: 1, column: 14 , shelf: 5},
    "ise443": { name: "Planning and control of maintenance systems : modelling and analysis / Salih O. Duffuaa, A. Raouf.    " , row: 1, column: 14 , shelf: 5},
    "ise405": { name: "Simulation with Arena W. David Kelton; Randall P. Sadowski; Nancy B. Zupick    " , row: 1, column: 14 , shelf: 4},
    "ise422": { name: "Facilities planning / James A. Tompkins ... [et al.].    " , row: 1, column: 14 , shelf: "2,3"},
    
    // column 15
    "ise405": { name: "Discrete-event system simulation./ Banks, Carson II, Nelson, Nicol.    " , row: 1, column: 15 , shelf: "5,6"},
    "ise402": { name: "Production and operations analysis : strategy, quality, analytics, application / Steven Nahmias, Tava Lennon Olsen.    " , row: 1, column: 15 , shelf: "2,3,4"},
    "ise420": { name: "The certified six sigma green belt handbook Roderick A. Munro, Govindarajan Ramu, and Daniel J. Zrymiak    " , row: 1, column: "14,15" , shelf: 1},

    // column 16
    "ise365": { name: "Operations research : an introduction / Hamdy A. Taha.    " , row: 11, column: 16 , shelf: "1,2"},
    "ise361": { name: "Operations research : an introduction / Hamdy A. Taha.    " , row: 11, column: 16 , shelf: "1,2"},
    "ise391": { name: "Product design and development / Karl T. Ulrich, University of Pennsylvania, Steven D. Eppinger, Massachusetts Institute of Technology.    " , row: 11, column: 16 , shelf: "3,4"},
    "ise324": { name: "Work systems and the methods, measurement, and management of work / Mikell P. Groover.    " , row: 11, column: 16 , shelf: "1,2,3"},
    "ise323": { name: "Work systems and the methods, measurement, and management of work / Mikell P. Groover.    " , row: 11, column: 16 , shelf: "1,2,3"},

    // column 17
    "ise320": { name: "Statistical quality control : a modern introduction / Douglas C. Montgomery.    " , row: 11, column: 17 , shelf: "1,2"},
    "ise321": { name: "operation research    " , row: 11, column: 17 , shelf: 3},

    // column 18
    "ise307": { name: "Fundamentals of engineering economics / Chan S. Park, Pravin Kumar, Nand Kumar.    " , row: 11, column: 18 , shelf: "1,2,3"},

    // column 19
    "ise303": { name: "Operations research : an introduction / Hamdy A. Taha.    " , row: 11, column: "19,20" , shelf: "1,2"},

    // column 20
    "ise291": { name: "" , row: 11, column: 20 , shelf: 3},
    
    // column 21
    "ise205": { name: "Applied statistics and probability for engineers / Douglas C. Montgomery (Arizona State University), George C. Runger (Arizona State University).    " , row: 11, column: 21 , shelf: "1,2,3"},
    "ise315": { name: "Applied statistics and probability for engineers / Douglas C. Montgomery (Arizona State University), George C. Runger (Arizona State University).    " , row: 11, column: 21 , shelf: "1,2,3"},

    // column 22
    "cise483": { name: "" , row: 11, column: 22 , shelf: 6},
    "cise438": { name: "Introduction to control system technology Robert N. Bateson    " , row: 11, column: 22 , shelf: 5},
    "cise432": { name: "Digital signal processing / John G. Proakis, Dimitris G. Manolakis    " , row: 11, column: 22 , shelf: 5},
    "cise418": { name: "Process dynamics and control / Dale E. Seborg...[et al.].    " , row: 11, column: 22 , shelf: 4},
    "cise414": { name: "Interfacing PIC microcontrollers : embedded design by interactive simulation / Martin Bates.    " , row: 11, column: 22 , shelf: 3},
    "cise412": { name: "Mechatronics : principles and applications / Godfrey C. Onwubolu.    " , row: 11, column: 22 , shelf: 2},
    "cise318": { name: "Digital control system analysis & design / Charles L. Phillips, H. Troy Nagle, Aranya Chakrabortty.    " , row: 11, column: 22 , shelf: 1},
    
    // column 23
    "cise316": { name: "Modern control engineering / Katsuhiko Ogata.    " , row: 11, column: 23 , shelf: 6},
    "cise315": { name: "Signals and systems / Alan V. Oppenheim, Alan S. Willsky, with S. Hamid Nawab.    " , row: 11, column: 23 , shelf: "4,5"},
    "cise313": { name: "Process control instrumentation technology Curtis D. Johnson    " , row: 11, column: 23 , shelf: 3},
    "cise312": { name: "Principles of measurement systems John P. Bentley    " , row: 11, column: 23 , shelf: "1,2"},

    // column 24
    "cise301": { name: "Numerical methods for engineers / Steven C. Chapra, Berger Chair in Computing and Engineering, Tufts University, Raymond P. Canale, Professor Emeritus of Civil Engineering, University of Michigan.    " , row: 11, column: 24 , shelf: "1,2,3"},
    "cise305": { name: "Modern control systems / Richard C. Dorf, University of California, Davis, Robert H. Bishop, The University of South Florida.    " , row: 11, column: 24 , shelf: "5,6"},
    // column 25
    // "cise": { name: "" , row: 11, column: 25 , shelf: 1},
    "cise201": { name: "Instrumentation and control systems / W. Bolton.    " , row: 11, column: 25 , shelf: "1,2"},
    "cise204": { name: "Digital design / M. Morris Mano, Michael D. Ciletti.    " , row: 11, column: 25 , shelf: 3},
    "cise209": { name: "Introduction to information systems : supporting and transforming business / R. Kelly Rainer Jr., Brad Prince, Casey Cegielski.    " , row: 11, column: 25 , shelf: 4},

    // column 26
    "arc491": { name: "" , row: 11, column: 26 , shelf: 6},
    "arc440": { name: "Architectural conservation : principles and practice / Aylin Orbasli.    " , row: 11, column: 26 , shelf: 6},
    "arc357": { name: "" , row: 11, column: 26 , shelf: 5},
    "arc401": { name: "" , row: 11, column: 26 , shelf: 5},
    "arc400": { name: "Programming for design : from theory to practice / Edith Cherry    " , row: 11, column: 26 , shelf: 5},
    "arc232": { name: "Structural analysis./ SI conversion by Tan Kiang Hwee.    " , row: 11, column: 26 , shelf: 4},
    "arc222": { name: "Structural analysis./ SI conversion by Tan Kiang Hwee.    " , row: 11, column: 26 , shelf: 4},
    "arc345": { name: "" , row: 11, column: 26 , shelf: "3,4"},
    "arc407": { name: "The professional practice of architectural working drawings / Osamu A. Wakita, Nagy R. Bakhoum, Richard M. Linde.    " , row: 11, column: 26 , shelf: "3,4"},
    "arc342": { name: "The non-designer's design book : design and typographic principles for the visual novice / Robin Williams.    " , row: 11, column: 26 , shelf: 3},
    "arc323": { name: "Simplified engineering for architects and builders / James E. Ambrose, Patrick Tripeny.    " , row: 11, column: 26 , shelf: 2},

    // column 27
    "arc306": { name: "" , row: 11, column: 27 , shelf: 6},
    "arc304": { name: "Time-saver standards for building types / edited by Joseph De Chiara and John Hancock Callender.    " , row: 11, column: 27 , shelf: 6},
    "arc305": { name: "The architect's studio companion : rules of thumb for preliminary design / Edward Allen and Joseph Iano.    " , row: 11, column: 27 , shelf: 6},
    "arc307": { name: "" , row: 11, column: 27 , shelf: 6},
    "arc210": { name: "Islamic architecture : form, function, and meaning / Robert Hillenbrand.    " , row: 11, column: 27 , shelf: 5},
    "arc231": { name: "Elementary structures for architects and builders / Ronald E. Shaeffer    " , row: 11, column: 27 , shelf:4},
    "arc221": { name: "Elementary structures for architects and builders / Ronald E. Shaeffer    " , row: 11, column: 27 , shelf: 4},
    "arc226": { name: "Modern architecture since 1900 William J. R. Curtis    " , row: 11, column: 27 , shelf: 4},
    "arc227": { name: "Modern architecture since 1900 William J. R. Curtis    " , row: 11, column: 27 , shelf: 4},
    "arc204": { name: "Architects' data / Ernst and Peter Neufert ; updated by Johannes Kister ... [et al.] ; translated by David Sturge.    " , row: 11, column: 27 , shelf: 3},
    "arc202": { name: "Architects' data / Ernst and Peter Neufert ; updated by Johannes Kister ... [et al.] ; translated by David Sturge.    " , row: 11, column: 27 , shelf: 3},
    "arc205": { name: "" , row: 11, column: 27 , shelf: 3},
    "arc203": { name: "Architectural graphic standards / authored by the American Institute of Architects ; Dennis J. Hall, FAIA, FCSI, editor-in-chief ; The Magnum Group, illustrator.    " , row: 11, column: 27 , shelf: 3},
    "arc121": { name: "A history of architecture : settings and rituals Spiro Kostof ; original drawings by Richard Tobias    " , row: 11, column: 27 , shelf: 2},
    "arc122": { name: "A history of architecture : settings and rituals Spiro Kostof ; original drawings by Richard Tobias    " , row: 11, column: 27 , shelf: 2},
    "arc213": { name: "Realistic architectural visualization with 3ds max and mental ray / Roger Cusson, Jamie Cardoso.    " , row: 11, column: 27 , shelf: 2},
    "arc124": { name: "Realistic architectural visualization with 3ds max and mental ray / Roger Cusson, Jamie Cardoso.    " , row: 11, column: 27 , shelf: 2},
    "arc102": { name: "Architecture : form, space and order Francis D. K. Ching    " , row: 11, column: 27 , shelf: 1},
    "arc103": { name: "Architecture : form, space and order Francis D. K. Ching    " , row: 11, column: 27 , shelf: 1},
    "arc113": { name: "Architectural drawing : a visual compendium of types and methods Rendow Yee    " , row: 11, column: 27 , shelf: 1},
    "arc114": { name: "" , row: 11, column: 27 , shelf: 1},
    
    // column 28
    "cp315": { name: "" , row: 11, column: 28 , shelf: 6},
    "cp310": { name: "Community planning : an introduction to the comprehensive plan / Eric Damian Kelly.    " , row: 11, column: 28 , shelf: 6},
    "cp308": { name: "Geographic information science and systems / Paul A. Longley, University College London, UK, Michael F. Goodchild, University Of California, Santa Barbara, USA, David J. Maguire, Birmingham City University, UK, David W. Rhind, City University, London, UK.    " , row: 11, column: 28 , shelf: 6},
    "cp303": { name: "Principles of map design / Judith A. Tyner.    " , row: 11, column: 28 , shelf: 5},
    "cp306": { name: "" , row: 11, column: 28 , shelf: 5},
    "cp206": { name: "Introduction to geographic information systems / Kang-tsung Chang.    " , row: 11, column: 28 , shelf: 4},
    "cp301": { name: "Essentials of marketing research./ William G. Zikmund, Barry J. Babin    " , row: 11, column: 28 , shelf: 4},
    "cp302": { name: "Integrated environmental planning James K. Lein    " , row: 11, column: 28 , shelf: 4},
    "cp204": { name: "Urban land use planning / Philip R. Berke ... [et al.].    " , row: 11, column: 28 , shelf: 3},
    "cp205": { name: "Urban Economics / Arthur O'Sullivan.    " , row: 11, column: 28 , shelf: 3},
    "cp203": { name: "Spatial databases : a tour / Shashi Shekhar, Sanjay Chawla.    " , row: 11, column: 28 , shelf: 2},

    // column 29
    "are438": { name: "" , row: 11, column: 29 , shelf: 6},
    "are440": { name: "Principles of solar engineering/ D. Yogi Goswami.    " , row: 11, column: 29 , shelf: 5},
    "are446": { name: "Structures / Daniel L. Schodek, Martin Bechthold.    " , row: 11, column: 29 , shelf: 5},
    "are430": { name: "" , row: 11, column: 29 , shelf: 5},
    "are431": { name: "Estimating in building construction / Steven J. Peterson, Weber State University, Frank R. Dagostino.    " , row: 11, column: 29 , shelf: 4},
    "are330": { name: "" , row: 11, column: 29 , shelf: 3},
    "are331": { name: "" , row: 11, column: 29 , shelf: 3},
    "are323": { name: "" , row: 11, column: 29 , shelf: 2},

    // column 30
    "are322": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 6}, // missingcode numbner
    "are325": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 6},
    "are328": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 6},
    "are301": { name: "Graphic thinking for architects and designers Paul Laseau    " , row: 11, column: 30 , shelf: 5},
    "are322": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 5},
    "are325": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 5},
    "are328": { name: "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Architectural Engineer, Ball State University; Alison G. Kwok, Professor of Architecture, University of Oregon.    " , row: 11, column: 30 , shelf: 5},
    "are222": { name: "Computing essentials / Timothy J. O'Leary, Linda I. O'Leary    " , row: 11, column: 30 , shelf: 4},
    "are303": { name: "Architectural graphic standards / authored by the American Institute of Architects ; Dennis J. Hall, FAIA, FCSI, editor-in-chief ; The Magnum Group, illustrator.    " , row: 11, column: 30 , shelf: 4},
    "are212": { name: "Building construction illustrated / Francis D.K. Ching.    " , row: 11, column: 30 , shelf: 3},
    "are220": { name: "" , row: 11, column: 30 , shelf: 3},
    "are211": { name: "Fundamentals of building construction : materials and methods / Edward Allen and Joseph Iano.    " , row: 11, column: 30 , shelf: 2},
    "are101": { name: "Architectural graphics./ Francis D.K. Ching.    " , row: 11, column: 30 , shelf: 1},
    "are201": { name: "Architectural graphics./ Francis D.K. Ching.    " , row: 11, column: 30 , shelf: 1},
    "are202": { name: "Architects' data / Ernst and Peter Neufert ; updated by Johannes Kister ... [et al.] ; translated by David Sturge.    " , row: 11, column: 30 , shelf: 1},

    // column 34
    "engl214": { name: "Successful writing at work : concise / Philip C. Kolin.    " , row: 9, column: 34 , shelf: "1,2,3"},

    // column 35
    "biol233": { name: "Laboratory manual for non-majors biology / David Morton, James Perry, Joy B. Perry ; contributions to animal diversity by Ronald E. Barry, Jr. and evolutionary agents by James H. Howard.    " , row: 9, column: 35 , shelf: "1,2"},

    // column 36
    "math001": { name: "Algebra and trigonometry / James Stewart, Lothar Redlin, Saleem Watson ; with the assistance of Phyllis Panman.    " , row: 9, column: 36 , shelf: "1,2,3,4"},
    "math002": { name: "Algebra and trigonometry / James Stewart, Lothar Redlin, Saleem Watson ; with the assistance of Phyllis Panman.    " , row: 9, column: 36 , shelf: "1,2,3,4"},

    // column 37
    "ae454": { name: "" , row: 9, column: 37 , shelf: 3},
    "ae449": { name: "" , row: 9, column: 37 , shelf: 2},
    "ae448": { name: "Principles of helicopter aerodynamics / J. Gordon Leishman, D.Sc.(Eng.),Ph.D.,F.R.Ae.S.    " , row: 9, column: 37 , shelf: 1},

    // column 38
    "ae427": { name: "Aircraft design : a conceptual approach / Daniel P. Raymer.    " , row: 9, column: 38 , shelf: 4},
    "ae426": { name: "Introduction to aircraft flight mechanics : performance, static stability, dynamic stability, classical feedback control, and state-space foundations / contributions by Thomas R. Yechout ; with Steven L. Morris, David E. Bossert, Wayne F. Hallgren, James    " , row: 9, column: 38 , shelf: 1},

    // column 39
    "ae422": { name: "Mechanics and thermodynamics of propulsion Philip G. Hill, Carl R. Peterson    " , row: 9, column: 39 , shelf: 4},
    "ae401": { name: "Aircraft systems : mechanical, electrical, and avionics subsystems integration / Ian Moir, Allan Seabridge.    " , row: 9, column: 39 , shelf: 3},
    "ae355": { name: "Applied numerical methods with MATLAB for engineers and scientists / Steven C. Chapra, Berger Chair in Computing and Engineering, Tufts University.    " , row: 9, column: 39 , shelf: 1},

    // column 40
    "ae333": { name: "Fundamentals of aerodynamics / John D. Anderson, Jr    " , row: 9, column: 40 , shelf: 4},
    "ae433": { name: "" , row: 9, column: 40 , shelf: 4},
    "ae328": { name: "Aircraft structures for engineering students / T.H.G. Megson.    " , row: 9, column: 40 , shelf: 3},
    "ae325": { name: "Gas dynamics/ James E. A. John    " , row: 9, column: 40 , shelf: 2},
    "ae313": { name: "Modern control systems / Richard C. Dorf, University of California, Davis, Robert H. Bishop, The University of South Florida.    " , row: 9, column: 40 , shelf: 1},

    // column 41
    "ae230": { name: "" , row: 9, column: 41 , shelf: 4},
    "ae240": { name: "Aircraft performance and design / John D. Anderson, Jr.    " , row: 9, column: 41 , shelf: 4},
    "ae228": { name: "" , row: 9, column: 41 , shelf: 3},
    "ae220": { name: "Introduction to flight / John D. Anderson, Jr.    " , row: 9, column: 41 , shelf: 2},
    "ae221": { name: "" , row: 9, column: 41 , shelf: 1},
    "ae211": { name: "" , row: 9, column: 41 , shelf: 1},

    // column 43
    "as483": { name: "Loss models : from data to decisions / Stuart A. Klugman, Harry H. Panjer, Gordon E. Willmot.    " , row: 9, column: 43 , shelf: 4},
    "as475": { name: "Survival analysis : a self-learning text / David G. Kleinbaum, Mitchel Klein.    " , row: 9, column: 43 , shelf: 3},
    "as482": { name: "Models for quantifying risk / Stephen J. Camilli, ASA, Richard L. London, FSA ; Ian Duncan, FSA, FIA, FCIA, MAAA.    " , row: 9, column: 43 , shelf: 3},
    "as388": { name: "ACTEX SOA exam P study manual / Samuel A. Broverman, Ph.D., ASA.    " , row: 9, column: 43 , shelf: 2},
    "as389": { name: "" , row: 9, column: 43 , shelf: 2},
    "as450": { name: "" , row: 9, column: 43 , shelf: 2},
    "as380": { name: "" , row: 9, column: 43 , shelf: 1},
    "as381": { name: "Actuarial mathematics by Newton L. Bowers ...<et al.>    " , row: 9, column: 43 , shelf: 1},

    // column 44
    "as322": { name: "" , row: 9, column: 44 , shelf: 4},
    "as289": { name: "" , row: 9, column: 44 , shelf: 3},
    "as250": { name: "" , row: 9, column: 44 , shelf: 2},
    "as470": { name: "" , row: 9, column: 44 , shelf: 2},
    "as498": { name: "Derivatives markets / Robert L. McDonald.    " , row: 9, column: 44 , shelf: 2},
    "as288": { name: "SOA exam FM/2 / Gail Hall, Richard London.    " , row: 9, column: 44 , shelf: 2},
    "as201": { name: "Mathematics of investment and credit / Samuel A. Broverman.    " , row: 9, column: 44 , shelf: 1},





    // column 61
    "chem201": { name: "", row: 1, column: 61 , shelf: '1,2,3,4' },
    "chem202": { name: "", row: 1, column: 61 , shelf: '1,2,3,4'},

    // column 64
    "chem204": { name: "", row: 1, column: 64 , shelf: 1},
    "chem212": { name: "", row: 1, column: 64 , shelf: '2,3,4'},
    "chem311": { name: "", row: 1, column: 64 , shelf:' 2,3,4'},
    "chem312": { name: "", row: 1, column: 64 , shelf: '2,3,4'},

    // column 65
    "chem221": { name: "", row: 1, column: 65 , shelf: 1},
    "chem236": { name: "", row: 1, column: 65 , shelf: '2,3'},
    "chem305": { name: "", row: 1, column: 65 , shelf: 4},

    // column 66
    "chem321": { name: "", row: 1, column: 66 , shelf: '1,2,3'},
    "chem324": { name: "", row: 1, column: 66 , shelf: '1,2,3'},
    "chem327": { name: "", row: 1, column: 66 , shelf: 4},
    "chem355": { name: "", row: 1, column: 66 , shelf: 4},

    // column 67
    "chem336": { name: "", row: 1, column: 67 , shelf: 1},
    "chem363": { name: "", row: 1, column: 67 , shelf: 2},
    "chem402": { name: "", row: 1, column: 67 , shelf: 2},
    "chem403": { name: "", row: 1, column: 67 , shelf: 3},
    "chem406": { name: "", row: 1, column: 67 , shelf: 3},
    "chem428": { name: "", row: 1, column: 67 , shelf: 4},
    "chem451": { name: "", row: 1, column: 67 , shelf: 4},

    // column 68
    "chem456": { name: "", row: 1, column: 68 , shelf: 1},
    "chem463": { name: "", row: 1, column: 68 , shelf: 2},



    // column 88
    "math405": { name: "", row: 2, column: 88 , shelf: "1"},
    "math427": { name: "", row: 2, column: 88 , shelf: "2"},
    "math455": { name: "", row: 2, column: 88 , shelf: "2"},
    "math433": { name: "", row: 2, column: 88 , shelf: "2"},
    "math432": { name: "", row: 2, column: 88 , shelf: "3"},
    "math431": { name: "", row: 2, column: 88 , shelf: "3"},
    "math460": { name: "", row: 2, column: 88 , shelf: "3"},
    "math435": { name: "", row: 2, column: 88 , shelf: "3"},
    "math445": { name: "", row: 2, column: 88 , shelf: "4"},
    "math499": { name: "", row: 2, column: 88 , shelf: "4"},  
        
    // column 89
    "math451": { name: "", row: 2, column: 89 , shelf: "1"},
    "math440": { name: "", row: 2, column: 89 , shelf: "1"},
    "math401": { name: "", row: 2, column: 89 , shelf: "2"},
    "math433": { name: "", row: 2, column: 89 , shelf: "2"},
    "math425": { name: "", row: 2, column: 89 , shelf: "3"},
    "math467": { name: "", row: 2, column: 89 , shelf: "3"},
    "math453": { name: "", row: 2, column: 89 , shelf: "4"},

    // column 90
    "math474": { name: "", row: 2, column: 90 , shelf: "1"},
    "math463": { name: "", row: 2, column: 90 , shelf: "2"},
    "math473": { name: "", row: 2, column: 90 , shelf: "3"},
    "math460": { name: "", row: 2, column: 90 , shelf: "4"},

    // column 91
    "phys101": { name: "", row: 2, column: 91 , shelf: "1,2,3,4" },
    "phys102": { name: "", row: 2, column: 91 , shelf: "1,2,3,4" },

    // column 97
    "phys133": { name: "", row: 2, column: 97 , shelf: "1,2" },

    // column 98
    "phys203": { name: "", row: 2, column: 98 , shelf: "1" },
    "phys211": { name: "", row: 2, column: 98 , shelf: "2" },
    "phys213": { name: "", row: 2, column: 98 , shelf: "3" },
    "phys212": { name: "", row: 2, column: 98 , shelf: "3" },
    // column 99
    "phys215": { name: "", row: 2, column: 99 , shelf: "1" },
    "phys215": { name: "", row: 2, column: 99 , shelf: "2" },
    "phys300": { name: "", row: 2, column: 99 , shelf: "3" },
    "phys301": { name: "", row: 2, column: 99 , shelf: "3" },
    "phys309": { name: "", row: 2, column: 99 , shelf: "4" },
    "phys304": { name: "", row: 2, column: 99 , shelf: "4" },
    "phys300": { name: "", row: 2, column: 99 , shelf: "4" },

    // column 100
    "phys305": { name: "", row: 2, column: 100 , shelf: "1" },
    "phys306": { name: "", row: 2, column: 100 , shelf: "1" },
    "phys310": { name: "", row: 2, column: 100 , shelf: "2" },
    "phys401": { name: "", row: 2, column: 100 , shelf: "2" },
    "phys403": { name: "", row: 2, column: 100 , shelf: "3" },
    "phys422": { name: "", row: 2, column: 100 , shelf: "4" },
    "phys402": { name: "", row: 2, column: 100 , shelf: "2" },
    "phys416": { name: "", row: 2, column: 100 , shelf: "3" },

    // column 101
    "phys423": { name: "", row: 2, column: 101 , shelf: "1" },
    "phys430": { name: "", row: 2, column: 101 , shelf: "2" },
    "phys430": { name: "", row: 2, column: 101 , shelf: "2" },
    "phys432": { name: "", row: 2, column: 101 , shelf: "3" },
    "phys441": { name: "", row: 2, column: 101 , shelf: "4" },

    // column 102
    "stat211": { name: "", row: 2, column: 102 , shelf: "1,2,3,4" },
    "stat212": { name: "", row: 2, column: 102 , shelf: "1,2,3,4" },
    "stat213": { name: "", row: 2, column: 102 , shelf: "1,2,3,4" },

    // column 103
    "stat201": { name: "", row: 2, column: 103 , shelf: "1" },
    "stat301": { name: "", row: 2, column: 103 , shelf: "1" },
    "stat302": { name: "", row: 2, column: 103 , shelf: "2" },
    "stat361": { name: "", row: 2, column: 103 , shelf: "3" },
    "stat310": { name: "", row: 2, column: 103 , shelf: "3" },
    "stat416": { name: "", row: 2, column: 103 , shelf: "4" },

    // column 104
    "stat319": { name: "", row: 2, column: 104 , shelf: "1,2,3,4" },

    // column 105
    "stat460": { name: "", row: 2, column: 105 , shelf: "4" },
    "stat416": { name: "", row: 2, column: 105 , shelf: "4" },

    // column 106
    "gs332": { name: "", row: 3, column: 106, shelf: "1,2,3,4" },

    // column 107
    "gs342": { name: "", row: 3, column: 107, shelf: "1,2" },
    "gs355": { name: "", row: 3, column: 107, shelf: "3,4" },

    // column 108
    "gs420": { name: "", row: 3, column: 108, shelf: "1,2" },
    "gs434": { name: "", row: 3, column: 108, shelf: "4" },

    // column 109
    "gs426": { name: "", row: 3, column: 109, shelf: "1,2,3" }, 
    "gs457": { name: "", row: 3, column: 109, shelf: "4" },

    // column 113
    "Ias121": { name: "", row: 3, column: 113, shelf: "1,2,3" },

    // column 115
    "Ias111": { name: "", row: 3, column: 115, shelf: "1,2,3,4" },

    // column 118
    "Ias201": { name: "", row: 3, column: 118, shelf: "1,2,3,4" },

    // column 120
    "Ias212": { name: "", row: 3, column: 120, shelf: "1,2,3,4" },

    // column 121
    "ias321": { name: "", row: 3, column: 121 , shelf: "1,2,3" },

    // column 124
    "ias322": { name: "", row: 3, column: 124 , shelf: "1,2,3" },

    // column 126
    "ias131": { name: "", row: 3, column: 126 , shelf: "1" },
    "ias231": { name: "", row: 3, column: 126 , shelf: "2" },
    "ias331": { name: "", row: 3, column: 126 , shelf: "3,4" },

    // column 127
    "ias416": { name: "", row: 3, column: 127 , shelf: "1,2,3,4" },

    // column 128
    "ias416": { name: "", row: 3, column: 128 , shelf: "1,2,3" },
    "ias419": { name: "", row: 3, column: 128 , shelf: "4" },

    // column 129
    "ias419": { name: "", row: 3, column: 129 , shelf: "1,2,3" },

    // column 131
    "ias418": { name: "", row: 3, column: 131 , shelf: "1,2,3" },

    // column 132
    "gs220": { name: "", row: 3, column: 132 , shelf: "1,2,3" },

    // column 133
    "gs133": { name: "", row: 3, column: 133 , shelf: "1,2,3" },

    // column 134
    "gs321": { name: "", row: 3, column: 134 , shelf: "1,2,3,4" },
    
    // column 135
    "gs336": { name: "", row: 3, column: 135 , shelf: "1,2,3" },

    // column 136
    "che200": { name: "", row: 4, column: 136 , shelf: "1,2,3,4" },

    // column 138
    "che204": { name: "", row: 4, column: 138 , shelf: "1,2,3,4"},

    // column 139
    "che300": { name: "", row: 4, column: 139 , shelf: "1,2,3,4" },

    // column 140
    "che303": { name: "", row: 4, column: 140 , shelf: "1,2,3,4"},

    // column 141
    "che304": { name: "", row: 4, column: 141 , shelf: "1,2,3,4" },

    // column 142
    "che306": { name: "", row: 4, column: 142 , shelf: "1,2"},
    "che401": { name: "", row: 4, column: 142 , shelf: "3,4" },

    // column 143
    "che360": { name: "", row: 4, column: 143 , shelf: "1,2"},
    "che402": { name: "", row: 4, column: 143 , shelf: "3,4" },

    // column 144
    "che425": { name: "", row: 4, column: 144 , shelf: "1,2,3"},
    "che495": { name: "", row: 4, column: 144 , shelf: "1,2,3" },
    "che424": { name: "", row: 4, column: 144 , shelf: "4"},

    // column 145
    "che430": { name: "", row: 4, column: 145 , shelf: "2,3" },

    // column 147
    "che431": { name: "", row: 4, column: 147 , shelf: "1"},
    "che432": { name: "", row: 4, column: 147 , shelf: "2" },
    "che440": { name: "", row: 4, column: 147 , shelf: "2"},
    "che444": { name: "", row: 4, column: 147 , shelf: "3" },
    "che449": { name: "", row: 4, column: 147 , shelf:"4" },

    // column 148
    "che463": { name: "", row: 4, column: 148 , shelf: "1" },
    "che458": { name: "", row: 4, column: 148 , shelf:"2" },
    "che461": { name: "", row: 4, column: 148 , shelf: "3" },
    "che462": { name: "", row: 4, column: 148 , shelf: "4"},

    // column 149
    "che453": { name: "", row: 4, column: 149 , shelf: "1" },
    "che465": { name: "", row: 4, column: 149 , shelf: "2"},
    "che470": { name: "", row: 4, column: 149 , shelf: "3" },
    "che471": { name: "", row: 4, column: 149 , shelf: "4"},

    // column 150
    "che472": { name: "", row: 4, column: 150 , shelf: "1" },
    "che473": { name: "", row: 4, column: 150 , shelf: "2"},
    "che480": { name: "", row: 4, column: 150 , shelf: "3" },

    // column 151
    "ce201": { name: "", row: 4, column: 151 , shelf: "1,2,3,4" },

    // column 154
    "ce202": { name: "", row: 4, column: 154 , shelf: "1,2,3,4" },

    // column 158
    "ce230": { name: "", row: 4, column: 158 , shelf: "1,2" },
    "ce261": { name: "", row: 4, column: 158 , shelf: "3,4" },
    "ce262": { name: "", row: 4, column: 158 , shelf: "3,4" },

    // column 159
    "ce305": { name: "", row: 4, column: 159 , shelf: "1" },
    "ce312": { name: "", row: 4, column: 159 , shelf: "2" },
    "ce315": { name: "", row: 4, column: 159 , shelf: "3,4" },

    // column 160
    "ce318": { name: "", row: 4, column: 160 , shelf: "1,2,3,4" },

    // column 161
    "ce341": { name: "", row: 4, column: 161 , shelf: "1,2" },
    "ce353": { name: "", row: 4, column: 161 , shelf: "3,4" },
    "ce354": { name: "", row: 4, column: 161 , shelf: "3,4" },

    // column 162
    "ce401": { name: "", row: 4, column: 162 , shelf: "1" },
    "ce406": { name: "", row: 4, column: 162 , shelf: "2" },
    "ce408": { name: "", row: 4, column: 162 , shelf: "3,4" },

    // column 163
    "ce415": { name: "", row: 4, column: 163 , shelf: "1" },
    "ce422": { name: "", row: 4, column: 163 , shelf: "3" },
    "ce421": { name: "", row: 4, column: 163 , shelf: "3" },

    // column 164
    "ce437": { name: "", row: 4, column: 164 , shelf: "2" },
    "ce335": { name: "", row: 4, column: 164 , shelf: "2" },
    "ce438": { name: "", row: 4, column: 164 , shelf: "2" },
    "ce441": { name: "", row: 4, column: 164 , shelf: "3" },
    "ce444": { name: "", row: 4, column: 164 , shelf: "4" },

    // column 165
    "ce455": { name: "", row: 4, column: 165 , shelf: "1" },
    "ce473": { name: "", row: 4, column: 165 , shelf: "2" },
    "ce476": { name: "", row: 4, column: 165 , shelf: "3" },


    // MASTERS
    // column 301
    "ls511": { name: "", row: 12, column: 301 , shelf: 1 },
 "ls513": { name: "", row: 12, column: 301 , shelf: 1},
 "ls524": { name: "", row: 12, column: 301 , shelf: 1},
 "ls541": { name: "", row: 12, column: 301 , shelf: 2 },
 "ls542": { name: "", row: 12, column: 301 , shelf: 2 },
 "ls551": { name: "", row: 12, column: 301 , shelf: 2 },
 "ls533": { name: "", row: 12, column: 301 , shelf: 2 },
 "ls564": { name: "", row: 12, column: 301 , shelf: 3 },
 "ls572": { name: "", row: 12, column: 301 , shelf: 3 },
 //column 302
 "coe501": { name: "", row: 12, column: 302 , shelf: 1 },
 "coe502": { name: "", row: 12, column: 302 , shelf: 1 },
 "coe507": { name: "", row: 12, column: 302 , shelf: 1 }, 
 "coe540": { name: "", row: 12, column: 302 , shelf: 2 },
 "coe547": { name: "", row: 12, column: 302 , shelf: 2 },
 "coe561": { name: "", row: 12, column: 302 , shelf: 2 },
 "coe572": { name: "", row: 12, column: 302 , shelf: 3 },
 "swe505": { name: "", row: 12, column: 302 , shelf: 3 },
 "swe516": { name: "", row: 12, column: 302 , shelf: 3 },
 "swe539": { name: "", row: 12, column: 302 , shelf: 4 },
 "swe587": { name: "", row: 12, column: 302 , shelf: 4 }, 
 // column 303
 "ics501": { name: "", row: 12, column: 303 , shelf: 1 },
 "ics531": { name: "", row: 12, column: 303 , shelf: 1 },
 "ics535": { name: "", row: 12, column: 303 , shelf: 1 },
 "ics541": { name: "", row: 12, column: 303 , shelf: 2 },
 "ics547": { name: "", row: 12, column: 303 , shelf: 2 },
 "ics547": { name: "", row: 12, column: 303 , shelf: 2 },
 "ics553": { name: "", row: 12, column: 303 , shelf: 3 },
 "ics555": { name: "", row: 12, column: 303 , shelf: 3 },
 "ics570": { name: "", row: 12, column: 303 , shelf: 3 },
 "ics582": { name: "", row: 12, column: 303 , shelf: 4 },
 // column 304
 "ise501": { name: "", row: 12, column: 304 , shelf: 1 },
 "ise503": { name: "", row: 12, column: 304 , shelf: 1 },
 "ise502": { name: "", row: 12, column: 304 , shelf: 1 },
 "ise508": { name: "", row: 12, column: 304 , shelf: 1 },
 "ise510": { name: "", row: 12, column: 304 , shelf: 2 },
 "ise521": { name: "", row: 12, column: 304 , shelf: 2 },
 "ise529": { name: "", row: 12, column: 304 , shelf: 2 },
 "ise548": { name: "", row: 12, column: 304 , shelf: 3 },
 "sce507": { name: "", row: 12, column: 304 , shelf: 3 },
 "sce514": { name: "", row: 12, column: 304 , shelf: 3 },
 "sce517": { name: "", row: 12, column: 304 , shelf: 4 },
 // column 305
 "pete512": { name: "", row: 12, column: 305 , shelf: 1 },
 "pete523": { name: "", row: 12, column: 305 , shelf: 1 },
 "pete520": { name: "", row: 12, column: 305 , shelf: 1 },
 "pete543": { name: "", row: 12, column: 305 , shelf: 2 },
 "pete544": { name: "", row: 12, column: 305 , shelf: 2 },
 "pete670": { name: "", row: 12, column: 305 , shelf: 2 },
 "ae520": { name: "", row: 12, column: 305 , shelf: 3 },
 "ae524": { name: "", row: 12, column: 305 , shelf: 3 },
 "ae530": { name: "", row: 12, column: 305 , shelf: 3 },
 "ae532": { name: "", row: 12, column: 305 , shelf: 4 },
 "ae539": { name: "", row: 12, column: 305 , shelf: 4 },
 "ae540": { name: "", row: 12, column: 305 , shelf: 4 },
 // column 306
 "me576": { name: "", row: 12, column: 306 , shelf: 1 },
 "me575": { name: "", row: 12, column: 306 , shelf: 1 },
 "me479": { name: "", row: 12, column: 306 , shelf: 1 },
 "me577": { name: "", row: 12, column: 306 , shelf: 1 },
 "me583": { name: "", row: 12, column: 306 , shelf: 1 },
 "me578": { name: "", row: 12, column: 306 , shelf: 1 },
 "me579": { name: "", row: 12, column: 306 , shelf: 2 },
 "me577": { name: "", row: 12, column: 306 , shelf: 2 },
 "me583": { name: "", row: 12, column: 306 , shelf: 2 },
 "me585": { name: "", row: 12, column: 306 , shelf: 2 },
 "mse500": { name: "", row: 12, column: 306 , shelf: 3 },
 "mse501": { name: "", row: 12, column: 306 , shelf: 3 },
 "mse502": { name: "", row: 12, column: 306 , shelf: 4 },
 "mse544": { name: "", row: 12, column: 306 , shelf: 4 },
 // column 307
 "me501": { name: "", row: 12, column: 307 , shelf: 1 },
 "me531": { name: "", row: 12, column: 307 , shelf: 1 },
 "me532": { name: "", row: 12, column: 307 , shelf: 1 },
 "me534": { name: "", row: 12, column: 307 , shelf: 1 },
 "me535": { name: "", row: 12, column: 307 , shelf: 2 },
 "me536": { name: "", row: 12, column: 307 , shelf: 2 },
 "me537": { name: "", row: 12, column: 307 , shelf: 2 },
 "me539": { name: "", row: 12, column: 307 , shelf: 2 },
 "me551": { name: "", row: 12, column: 307 , shelf: 3 },
 "me552": { name: "", row: 12, column: 307 , shelf: 3 },
 "me553": { name: "", row: 12, column: 307 , shelf: 3 },
 "me542": { name: "", row: 12, column: 307 , shelf: 3 },
 "me554": { name: "", row: 12, column: 307 , shelf: 3 },
 "me564": { name: "", row: 12, column: 307 , shelf: 4 },
 "me572": { name: "", row: 12, column: 307 , shelf: 4 },
 "me575": { name: "", row: 12, column: 307 , shelf: 4 },
 // column 308
 "ee562": { name: "", row: 12, column: 308 , shelf: 1 },
 "ee570": { name: "", row: 12, column: 308 , shelf: 1 },
 "ee571": { name: "", row: 12, column: 308 , shelf: 1 },
 "ee573": { name: "", row: 12, column: 308 , shelf: 1 },
 "ee576": { name: "", row: 12, column: 308 , shelf: 2 },
 "ee577": { name: "", row: 12, column: 308 , shelf: 2 },
 "ee578": { name: "", row: 12, column: 308 , shelf: 2 },
 "ee580": { name: "", row: 12, column: 308 , shelf: 2 },
 "ee620": { name: "", row: 12, column: 308 , shelf: 2 },
 "ee622": { name: "", row: 12, column: 308 , shelf: 3 },
 "ee623": { name: "", row: 12, column: 308 , shelf: 3 },
 "ee633": { name: "", row: 12, column: 308 , shelf: 3 },
 "ee652": { name: "", row: 12, column: 308 , shelf: 3 },
 "ee662": { name: "", row: 12, column: 308 , shelf: 4 },
 "ee663": { name: "", row: 12, column: 308 , shelf: 4 },
 //column 309
 "ee520": { name: "", row: 12, column: 309 , shelf: 1 },
 "ee523": { name: "", row: 12, column: 309 , shelf: 1 },
 "ee524": { name: "", row: 12, column: 309 , shelf: 1 },
 "ee525": { name: "", row: 12, column: 309 , shelf: 1 },
 "ee528": { name: "", row: 12, column: 309 , shelf: 2 },
 "ee530": { name: "", row: 12, column: 309 , shelf: 2 },
 "ee530": { name: "", row: 12, column: 309 , shelf: 2 },
 "ee531": { name: "", row: 12, column: 309 , shelf: 2 },
 "ee532": { name: "", row: 12, column: 309 , shelf: 2 },
 "ee533": { name: "", row: 12, column: 309 , shelf: 3 },
 "ee542": { name: "", row: 12, column: 309 , shelf: 3 },
 "ee545": { name: "", row: 12, column: 309 , shelf: 3 },
 "ee533": { name: "", row: 12, column: 309 , shelf: 3 },
 "ee507": { name: "", row: 12, column: 309 , shelf: 4 },
 "ee552": { name: "", row: 12, column: 309 , shelf: 4 },
 "ee555": { name: "", row: 12, column: 309 , shelf: 4 },
 //column 310
 "ce574": { name: "", row: 12, column: 310 , shelf: 1 },
 "ce575": { name: "", row: 12, column: 310 , shelf: 1 },
 "ce576": { name: "", row: 12, column: 310 , shelf: 1 },
 "ce578": { name: "", row: 12, column: 310 , shelf: 2 },
 "ce579": { name: "", row: 12, column: 310 , shelf: 2 },
 "ce671": { name: "", row: 12, column: 310 , shelf: 2 },
 "ce582": { name: "", row: 12, column: 310 , shelf: 2 },
 "ce618": { name: "", row: 12, column: 310 , shelf: 3 },
 "ce645": { name: "", row: 12, column: 310 , shelf: 3 },
 "ce651": { name: "", row: 12, column: 310 , shelf: 3 },
 "ce652": { name: "", row: 12, column: 310 , shelf: 4 },
 "ce675": { name: "", row: 12, column: 310 , shelf: 4 },
 "ce671": { name: "", row: 12, column: 310 , shelf: 4 },
};
let books={

    // ics start
    "Data mining : concepts and techniques / Jiawei Han, Micheline Kamber, Jian Pei." : {courseno: "ICS 426", FirstOfISBN : 9780123814791, stockno: 2621200037},
    "Discrete mathematics and its applications / Kenneth H. Rosen adapted by Kamala Krithivasan." : {
        courseno: "ICS 253, ICS 254",
        FirstOfISBN: 9789814670135,
        stockno: 2621200038
    },
    "Data communications and networking / Behrouz A. Forouzan." : {
        courseno: "ICS 343",
        FirstOfISBN: 9789814577519,
        stockno: 2621200043
    },
    "Operating system concepts essentials / Abraham Silberschatz, Peter Baer Galvin, Greg Gagne." : {
        courseno: "ICS 431",
        FirstOfISBN: 9781118093757,
        stockno: 2621300049
    },
    "Data structures and algorithms in Java / Adam Drozdek." : {
        courseno: "ICS 202",
        FirstOfISBN: 9789814392785,
        stockno: 2621300050
    },
    "Ethics in information technology / George W. Reynolds." : {
        courseno: "ICS 309",
        FirstOfISBN: 9781285197159,
        stockno: 2621400059
    },
    "Computer graphics with Open GL / Hearn, Baker, Carithers." : {
        courseno: "ICS 415, ICS 435, ICS 543",
        FirstOfISBN: 9781292024257,
        stockno: 2621400060
    },
    "Concepts of programming languages / Robert W. Sebesta; global edition contributions by Soumen Mukherjee, Arup Kumar Bhattacharjee" : {
        courseno: "ICS 410",
        FirstOfISBN: 9781292100555,
        stockno: 2621500066
    },
    "Fundamentals of database systems / Ramez Elmasri, Shamkant B. Navathe" : {
        courseno: "ICS 324, ICS 334, ICS 424, ICS 541",
        FirstOfISBN: 9781292097619,
        stockno: 2621500067
    },
    "Problem solving and program design in C / Jeri R Hanly, Elliot B Koffman." : {
        courseno: "ICS 103",
        FirstOfISBN: 9781292098814,
        stockno: 2621500069
    },
    "Algorithms : design techniques and analysis / M.H. Alsuwaiyel." : {
        courseno: "ICS 353, ICS 553",
        FirstOfISBN: 9789814723640,
        stockno: 2621600071
    },
    "Artificial intelligence : a modern approach / Stuart J. Russell and Peter Norvig." : {
        courseno: "ICS 381",
        FirstOfISBN: 9781292153964,
        stockno: 2621600072
    },
    "Absolute Java / Walter Savitch." : {
        courseno: "ICS 102, ICS 201",
        FirstOfISBN: 9781292109220,
        stockno: 2621600075
    },
    "Algorithms : design techniques and analysis / M. H. AlSuwaiyel" : {
        courseno: "ICS 353, ICS 553",
        FirstOfISBN: 9789810237400,
        stockno: 2620037
    },
    "Introduction to cryptography and network security / Behrouz A. Forouzan." : {
        courseno: "ICS 454, ICS 555",
        FirstOfISBN: 9780071263610,
        stockno: 2620900020
    },
    "Speech and language processing : an introduction to natural language processing, computational linguistics, and speech recognition / Daniel Jurafsky, James H. Martin." : {
        courseno: "ICS 482, ICS 582",
        FirstOfISBN: 9780135041963,
        stockno: 2620800012
    },
    // ics end
    // coe start
    "Linear System Theory and Design : International third edition / Chi-Tsong Chen." : {
        courseno: "COE 507",
        FirstOfISBN: 9780195392074,
        stockno: 2614507
    },
    "VHDL : modular design and synthesis of cores and systems / Zainalabedin Navabi." : {
        courseno: "COE 561",
        FirstOfISBN: 9780071475457,
        stockno: 2630800001
    },
    "Computer security : principles and practice / William Stallings, Lawrie Brown." : {
        courseno: "COE 449",
        FirstOfISBN: 9780135137116,
        stockno: 2631000008
    },
    "Information security : principles and practice / Mark Stamp." : {
        courseno: "COE 451",
        FirstOfISBN: 9780470626399,
        stockno: 2631200012
    },
    "Design for electrical and computer engineers : theory, concepts, and practice / Ralph M. Ford, Chris S. Coulston." : {
        courseno: "COE 300",
        FirstOfISBN: 9780071263474,
        stockno: 2631200014
    },
    "Advanced digital design with the Verilog HDL / Michael D. Ciletti." : {
        courseno: "COE 405",
        FirstOfISBN: 9780136019282,
        stockno: 2631200015
    },
    "Introduction to logic design / Alan B, Marcovitz." : {
        courseno: "COE 202",
        FirstOfISBN: 9780070164901,
        stockno: 2631200017
    },
    "Computer architecture : a quantitative approach / John L. Hennessy, David A. Patterson." : {
        courseno: "COE 501",
        FirstOfISBN: 9780123838728,
        stockno: 2631300018
    },
    "Top-down network design / Priscilla Oppenheimer." : {
        courseno: "COE 444, CSE 436",
        FirstOfISBN: 9781587202834,
        stockno: 2631300019
    },
    "Data and computer communications / William Stallings." : {
        courseno: "COE 241, COE 341",
        FirstOfISBN: 9781292014388,
        stockno: 2631400022
    },
    "Computer organization and design / David A. Patterson, John L. Hennessy." : {
        courseno: "COE 301, ICS 233",
        FirstOfISBN: 9780124077263,
        stockno: ["2631400023", "2621300053"]
    },
    "Computer networks / Andrew S. Tanenbaum, David J. Wetherall." : {
        courseno: "COE 540, ICS 570",
        FirstOfISBN: 9781292024226,
        stockno: ["2631500024", "2621400056"]
    },
    "Business data communications and networking / Jerry FitzGerald, Alan Dennis, Alexandra Durcikova." : {
        courseno: "COE 353",
        FirstOfISBN: 9781118891681,
        stockno: 2631600026
    },
    "Computer networking : a top-down approach / James F. Kurose, Keith W. Ross." : {
        courseno: "COE 344, ICS 570",
        FirstOfISBN: 9781292153599,
        stockno: 2631800001
    },
    "Computers as components : principles of embedded computing system design / Marilyn Wolf." : {
        courseno: "COE 306",
        FirstOfISBN: 9780128053874,
        stockno: 2631800002
    },
    "VLSI physical design automation : theory and practice / Sadiq M. Sait, Habib Youssef." : {
        courseno: "COE 572",
        FirstOfISBN: 9789810238834,
        stockno: 2638503
    },
    "Computer architecture : a quantitative approach / John L. Hennessy, David A. Patterson." : {
        courseno: "COE 501",
        FirstOfISBN: 9780128119051,
        stockno: 2631900003
    },
    
    // coe finish
    // swe start
    "Software architecture : foundations, theory, and practice / Richard N. Taylor, Nenad Medvidoviقc, Eric M. Dashofy." : {
        courseno: "SWE 416, SWE 536",
        FirstOfISBN: 9780470167748,
        stockno: 2620900019
    },
    "Internet & World Wide Web : how to program / P.J. Deitel, H.M. Deitel." : {
        courseno: "SWE 363",
        FirstOfISBN: 9780273764021,
        stockno: 2621100032
    },
    "Software metrics : a rigorous and practical approach / Norman Fenton, James Bieman." : {
        courseno: "SWE 469, SWE 539",
        FirstOfISBN: 9781439838228,
        stockno: 2621400058
    },
    "Software engineering / Ian Sommerville." : {
        courseno: "SWE 205, SWE 311, ICS 413, ICS 511",
        FirstOfISBN: 9781292096131,
        stockno: 2621500064
    },
    "Introduction to software testing / Paul Ammann, Jeff Offutt." : {
        courseno: "SWE 326",
        FirstOfISBN: 9781107172012,
        stockno: 2621600074
    },
    "Designing the user interface : strategies for effective human-computer interaction / Ben Shneiderman...e[et al]." : {
        courseno: "SWE 312",
        FirstOfISBN: 9781292153919,
        stockno: 2621800001
    },
    "Information technology project management / Kathy Schwalbe." : {
        courseno: "SWE 387, SWE 587",
        FirstOfISBN: 9781337101356,
        stockno: 2621900003
    },
    "Software design : from programming to architecture / Eric J. Braude" : {
        courseno: "SWE 316, SWE 516, ICS 516",
        FirstOfISBN: 9780471204596,
        stockno: 2627529
    },
    
    // swe finish
    // ise start
    "Analysis and control of production systems / Elsayed A. Elsayed, Thomas O. Boucher" : {
        courseno: "ISE 508",
        FirstOfISBN: 9780130787590,
        stockno: 2610032
    },
    "Instrumentation and control systems / W. Bolton" : {
        courseno: "CISE201",
        FirstOfISBN: 9780750664325,
        stockno: 2610800001
    },
    "Introduction to control system technology / Robert N. Bateson" : {
        courseno: "CISE438",
        FirstOfISBN: 9780130306883,
        stockno: 2610800013
    },
    "Work systems and the methods, measurement, and management of work / Mikell P. Groover" : {
        courseno: "ISE 323",
        FirstOfISBN: 9781292027050,
        stockno: 2610800016
    },
    "Discrete-event system simulation / Banks, Carson II, Nelson, Nicol" : {
        courseno: "ISE 405",
        FirstOfISBN: 9781292024370,
        stockno: 2610900024
    },
    "Linear programming and network flows / Mokhtar S. Bazaraa, John J. Jarvis, Hanif D. Sherali" : {
        courseno: "ISE 503, ISE 501",
        FirstOfISBN: 9780470462720,
        stockno: 2611000027
    },
    "Facilities planning / James A. Tompkins ... [et al.]" : {
        courseno: "ISE 422",
        FirstOfISBN: 9780470444047,
        stockno: 2611000028
    },
    "Principles of sequencing and scheduling / Kenneth R. Baker, Dan Trietsch" : {
        courseno: "ISE 448, ISE 548",
        FirstOfISBN: 9780470391655,
        stockno: 2611000032
    },
    "Operations research : an introduction / Hamdy A. Taha" : {
        courseno: "ISE 303, STAT361, ISE 361",
        FirstOfISBN: 9780131391994,
        stockno: ["2611100040", "2131400105"]
    },
    "Occupational safety and health for technologists, engineers, and managers / David L. Goetsch" : {
        courseno: "ISE 465",
        FirstOfISBN: 9781292061993,
        stockno: 2611100043
    },
    "Modern control engineering / Katsuhiko Ogata" : {
        courseno: "CISE316, ME  488",
        FirstOfISBN: 9780137133376,
        stockno: 2611100044
    },
    "Process control instrumentation technology / Curtis D. Johnson" : {
        courseno: "CISE313",
        FirstOfISBN: 9781292026015,
        stockno: 2611300048
    },
    "Cost accounting principles / Cecily A. Raiborn, Michael R. Kinney" : {
        courseno: "ISE 304",
        FirstOfISBN: 9781111972103,
        stockno: ["2611300049", "2611700090"]
    },
    "Statistical quality control : a modern introduction / Douglas C. Montgomery" : {
        courseno: "ISE 320",
        FirstOfISBN: 9781118322574,
        stockno: 2611300051
    },
    "Interfacing PIC microcontrollers : embedded design by interactive simulation / Martin Bates" : {
        courseno: "CISE414",
        FirstOfISBN: 9780080993638,
        stockno: 2611400063
    },
    "Making hard decisions with DecisionTools / Robert T. Clemen, Terence Reilly" : {
        courseno: "ISE 447, EM  530",
        FirstOfISBN: 9780538797573,
        stockno: ["2611400064", "2531300016"]
    },
    "Signals and systems / Alan V. Oppenheim, Alan S. Willsky, with S. Hamid Nawab" : {
        courseno: "CISE315",
        FirstOfISBN: 9781292025902,
        stockno: 2611400065
    },
    "Simulation with Arena / W. David Kelton; Randall P. Sadowski; Nancy B. Zupick" : {
        courseno: "ISE 405",
        FirstOfISBN: 9781259254369,
        stockno: 2611400069
    },
    "Digital control system analysis & design / Charles L. Phillips, H. Troy Nagle, Aranya Chakrabortty." : {
        courseno: "CISE318, EE 432, EE 200",
        FirstOfISBN: 9781292061221,
        stockno: 2611500074
    },
    "Planning and control of maintenance systems : modelling and analysis / Salih O. Duffuaa, A. Raouf." : {
        courseno: "ISE 429",
        FirstOfISBN: 9783319198026,
        stockno: 2611500077
    },
    "Digital design / M. Morris Mano, Michael D. Ciletti." : {
        courseno: "CISE204, EE 200",
        FirstOfISBN: 9780132340434,
        stockno: 2611522
    },
    "Introduction to information systems : supporting and transforming business / R. Kelly Rainer Jr., Brad Prince, Casey Cegielski." : {
        courseno: "CISE209",
        FirstOfISBN: 9781118808559,
        stockno: 2611600078
    },
    "Database processing : fundamentals, design, and implementation / David M. Kroenke, David Auer." : {
        courseno: "ISE 361",
        FirstOfISBN: 9781292107639,
        stockno: 2611600080
    },
    "The certified six sigma green belt handbook / Roderick A. Munro, Govindarajan Ramu, and Daniel J. Zrymiak" : {
        courseno: "ISE 420",
        FirstOfISBN: 9780873898911,
        stockno: 2611600081
    },
    "Numerical methods for engineers / Steven C. Chapra, Raymond P. Canale." : {
        courseno: "CISE301, CE 318",
        FirstOfISBN: 9789814670876,
        stockno: ["2611600083", "2331600075"]
    },
    "Production and operations analysis : strategy, quality, analytics, application / Steven Nahmias, Tava Lennon Olsen." : {
        courseno: "ISE 402",
        FirstOfISBN: 9781478623069,
        stockno: 2611700085
    },
    "Instrumentation and control systems / W. Bolton." : {
        courseno: "CISE201",
        FirstOfISBN: 9780081006139,
        stockno: 2611700086
    },
    "Introduction to probability models / Sheldon M Ross." : {
        courseno: "ISE 502, ISE 543, STAT416",
        FirstOfISBN: 9780124079489,
        stockno: ["2611700087", "2131500113"]
    },
    "Modern control systems / Richard C. Dorf, Robert H. Bishop." : {
        courseno: "CISE302, EE 380, AE 313, CISE305",
        FirstOfISBN: 9781292152974,
        stockno: ["2611700088", "2341700047", "2381600023"]
    },
    "Operations research : an introduction / Hamdy A. Taha." : {
        courseno: "ISE 303, STAT361",
        FirstOfISBN: 9781292165547,
        stockno: 2611700089
    },
    "Cost accounting : foundations and evolutions / Michael R. Kinney, Cecily A. Raiborn." : {
        courseno: "ISE 304",
        FirstOfISBN: 9781111971724,
        stockno: 2611700090
    },
    "Reliability engineering and risk analysis : a practical guide / Mohammad Modarres, Mark P. Kaminskiy, Vasiliy Krivtsov." : {
        courseno: "ISE 480",
        FirstOfISBN: 9781498745871,
        stockno: 2611800092
    },
    "Product design and development / Karl T. Ulrich, Steven D. Eppinger." : {
        courseno: "ISE 391",
        FirstOfISBN: 9780078029066,
        stockno: 2611800093
    },
    "Fundamentals of engineering economics / Chan S. Park, Pravin Kumar, Nand Kumar." : {
        courseno: "ISE 307",
        FirstOfISBN: 9780273772910,
        stockno: 2612514
    },
    "Digital control system analysis and design / Charles L. Phillips, H. Troy Nagle." : {
        courseno: "CISE318, EE 432",
        FirstOfISBN: 9780133177299,
        stockno: ["2611517", "2341532"]
    },
    "Digital design : with an introduction to the verilog HDL, VHDL, and system Verilog / M. Morris Mano, Michael D. Ciletti." : {
        courseno: "CISE204",
        FirstOfISBN: 9781292231167,
        stockno: 2611900095
    },
    "Facilities planning and design / Alberto Garcia-Diaz." : {
        courseno: "ISE 422",
        FirstOfISBN: 9781292042893,
        stockno: 2611500076
    },
    "Introduction to maintenance engineering : modelling, optimization and management / Mohammed Ben-Daya, Uday Kumar, D.N. Prabhakar Murthy." : {
        courseno: "ISE 529",
        FirstOfISBN: 9781118487198,
        stockno: 2611600082
    },
    "Mechatronics : principles and applications / Godfrey C. Onwubolu." : {
        courseno: "CISE412",
        FirstOfISBN: 9780750663793,
        stockno: 2610900017
    },
    "Nonlinear programming / Dimitri P. Bertsekas." : {
        courseno: "ISE 521",
        FirstOfISBN: 9781886529007,
        stockno: 2610800012
    },
    "Process dynamics and control / Dale E. Seborg, et al." : {
        courseno: "CISE418, EE 433, CHE 401",
        FirstOfISBN: 9780470128671,
        stockno: ["2611100042", "2321800044", "2346527"]
    },
    "Scheduling : theory, algorithms, and systems / Michael L. Pinedo." : {
        courseno: "ISE 548",
        FirstOfISBN: 9783319265780,
        stockno: 2611700084
    },
    "Operations research." : {
        courseno: "ISE 321",
        FirstOfISBN: 9781292165547
    },
    "Supply Chain Management Strategy, Planning, and Operation / Sunil Chopra." : {
        courseno: "ISE 470, OM 530",
        FirstOfISBN: 9781292257891
    },
        
    
    // ise finish
    // cise start with ise ^^^^^^^
    // cise finish

    // arc start
    "A history of architecture : settings and rituals / Spiro Kostof." : {
        courseno: "ARC 122, ARC 121, ARC 313, ARC 112",
        FirstOfISBN: 9780195399837,
        stockno: 2540049
    },
    "Architectural drawing : a visual compendium of types and methods / Rendow Yee." : {
        courseno: "ARC 100, ARC 113",
        FirstOfISBN: 9781118012871,
        stockno: 2540800005
    },
    "Emerging concepts in urban space design / Geoffrey Broadbent." : {
        courseno: "ARC 453, ARC 251, ARC 454",
        FirstOfISBN: 9780419161509,
        stockno: 2541000010
    },
    "Realistic architectural visualization with 3ds max and mental ray / Roger Cusson, Jamie Cardoso." : {
        courseno: "ARC 213, ARC 124",
        FirstOfISBN: 9780240812298,
        stockno: 2541100014
    },
    "The professional practice of architectural working drawings / Osamu A. Wakita, Nagy R. Bakhoum, Richard M. Linde." : {
        courseno: "ARC 407",
        FirstOfISBN: 9780470618158,
        stockno: 2541200017
    },
    "Structural analysis / SI conversion by Tan Kiang Hwee." : {
        courseno: "ARC 232, ARC 222, CE 305",
        FirstOfISBN: 9789810687137,
        stockno: 2541200018
    },
    "Islamic architecture : form, function, and meaning / Robert Hillenbrand." : {
        courseno: "ARC 210, ARC 416, ARC 122",
        FirstOfISBN: 9780231101332,
        stockno: 2541300021
    },
    "Architecture : form, space and order / Francis D. K. Ching." : {
        courseno: "ARC 101, ARC 102, ARC 103",
        FirstOfISBN: 9781118745083,
        stockno: 2541500025
    },
    "Simplified engineering for architects and builders / James E. Ambrose, Patrick Tripeny." : {
        courseno: "ARC 323",
        FirstOfISBN: 9781118975046,
        stockno: 2541600026
    },
    "The architect's studio companion : rules of thumb for preliminary design / Edward Allen and Joseph Iano." : {
        courseno: "ARC 305",
        FirstOfISBN: 9781119092414,
        stockno: 2541700030
    },
    "The architecture student's handbook of professional practice / the American Institute of Architects." : {
        courseno: "ARC 426",
        FirstOfISBN: 9781118738979,
        stockno: 2541700031
    },
    "Elementary structures for architects and builders / Ronald E. Shaeffer." : {
        courseno: "ARC 231, ARC 221",
        FirstOfISBN: 9780131186552,
        stockno: 2542004
    },
    "Modern architecture since 1900 / William J. R. Curtis." : {
        courseno: "ARC 226, ARC 227, ARC 314, ARC 313",
        FirstOfISBN: 9780714833569,
        stockno: 2545005
    },
    "Programming for design : from theory to practice / Edith Cherry." : {
        courseno: "ARC 400",
        FirstOfISBN: 9780471196457,
        stockno: 2546504
    },
    "Time-saver standards for building types / edited by Joseph De Chiara, John Hancock Callender." : {
        courseno: "ARC 304",
        FirstOfISBN: 9780071202411,
        stockno: 2548016
    },
    "Architectural conservation : principles and practice / Aylin Orbasli." : {
        courseno: "ARC 440, ARC 483",
        FirstOfISBN: 9780632040254,
        stockno: 2541000011
    },
    "The non-designer's design book : design and typographic principles for the visual novice / Robin Williams." : {
        courseno: "ARC 342",
        FirstOfISBN: 9780133966152,
        stockno: 2541300022
    },
    "The professional practice of architectural working drawings / Osamu A. Wakita, Nagy R. Bakhoum, Richard M. Linde." : {
        courseno: "ARC 407",
        FirstOfISBN: 9781118880524,
        stockno: 2541800032
    },
    
    // arc finish
    // cp start
    "Community planning : an introduction to the comprehensive plan / Eric Damian Kelly." : {
        courseno: "CP 310",
        FirstOfISBN: 9781597265539,
        stockno: 2521000007
    },
    "Urban Planning Today : a Harvard Design Magazine Reader." : {
        courseno: "CP 315",
        FirstOfISBN: 9780816647576,
        stockno: 2521000008
    },
    "Technical drawing with engineering graphics / Frederick E. Giesecke, et al." : {
        courseno: "CP 203",
        FirstOfISBN: 9780134306414,
        stockno: 2521000009
    },
    "Integrated environmental planning / James K. Lein." : {
        courseno: "CP 302",
        FirstOfISBN: 9780632043460,
        stockno: 2521100011
    },
    "Principles of map design / Judith A. Tyner." : {
        courseno: "CP 303",
        FirstOfISBN: 9781462517121,
        stockno: 2521100012
    },
    "Introduction to remote sensing / James B. Campbell, Randolph H. Wynne." : {
        courseno: "CP 303",
        FirstOfISBN: 9781609181765,
        stockno: 2521100013
    },
    "Introduction to geographic information systems / Kang-tsung Chang." : {
        courseno: "CP 206",
        FirstOfISBN: 9780071086165,
        stockno: 2521200018
    },
    "Essentials of marketing research / William G. Zikmund, Barry J. Babin." : {
        courseno: "CP 301",
        FirstOfISBN: 9781133273431,
        stockno: 2521300022
    },
    "Geographic information science and systems / Paul A. Longley, et al." : {
        courseno: "CP 308, CRP 514",
        FirstOfISBN: 9781118676950,
        stockno: 2521500001
    },
    "Quantitative methods for business decisions / Jon Curwin and Roger Slater." : {
        courseno: "CP 307",
        FirstOfISBN: 9781408060193,
        stockno: 2521800002
    },
    "Urban land use planning / Philip R. Berke, et al." : {
        courseno: "CP 204, CRP 503",
        FirstOfISBN: 9780252030796,
        stockno: 2528513
    },
    "Spatial databases : a tour / Shashi Shekhar, Sanjay Chawla." : {
        courseno: "CP 203",
        FirstOfISBN: 9780130174802,
        stockno: 2521000009 // This stock number is duplicated from another entry, please check for accuracy.
    },
    
    // cp finish
    // are start
    "Lee's building maintenance management / Paul Wordsworth." : {
        courseno: "ARE 524",
        FirstOfISBN: 9780632053629,
        stockno: 2510512
    },
    "Construction specifications writing : principles and procedures / Mark Kalin, et al." : {
        courseno: "ARE 459, ARC 407",
        FirstOfISBN: 9780470380369,
        stockno: ["2511200001", "2541100016"]
    },
    "Construction management / Daniel W. Halpin, Bolivar A. Senior." : {
        courseno: "ARE 413",
        FirstOfISBN: 9780470505939,
        stockno: 2511300003
    },
    "Estimating in building construction / Steven J. Peterson, Frank R. Dagostino." : {
        courseno: "ARE 431",
        FirstOfISBN: 9780133431100,
        stockno: 2511400004
    },
    "Fundamentals of building construction : materials and methods / Edward Allen, Joseph Iano." : {
        courseno: "ARE 211, ARE 500",
        FirstOfISBN: 9781118138915,
        stockno: 2511400005
    },
    "Building construction illustrated / Francis D.K. Ching." : {
        courseno: "ARE 212",
        FirstOfISBN: 9781118458341,
        stockno: 2511400007
    },
    "Architects' data / Ernst and Peter Neufert, et al." : {
        courseno: "ARE 202, ARC 202, ARC 204",
        FirstOfISBN: 9781405192538,
        stockno: ["2511400008", "2540045"]
    },
    "Mechanical and electrical equipment for buildings / Walter T. Grondzik, Alison G. Kwok." : {
        courseno: "ARE 320, ARE 322, ARE 325, ARE 328",
        FirstOfISBN: 9781118615904,
        stockno: 2511500009
    },
    "Computing essentials / Timothy J. O'Leary, Linda I. O'Leary." : {
        courseno: "ARE 222, ARE 510",
        FirstOfISBN: 9780077167790,
        stockno: 2511500013
    },
    "Architectural graphics / Francis D.K. Ching." : {
        courseno: "ARE 101, ARE 201",
        FirstOfISBN: 9781119035664,
        stockno: 2511600014
    },
    "Principles of solar engineering / D. Yogi Goswami." : {
        courseno: "ARE 440",
        FirstOfISBN: 9781466563780,
        stockno: 2511600015
    },
    "Architectural graphic standards / authored by the American Institute of Architects, Dennis J. Hall, et al." : {
        courseno: "ARE 303, ARC 203",
        FirstOfISBN: 9781118909508,
        stockno: ["2511600016", "2541700027"]
    },
    "Graphic thinking for architects and designers / Paul Laseau." : {
        courseno: "ARE 301",
        FirstOfISBN: 9780471352921,
        stockno: 2513005
    },
    "Solar engineering of thermal processes / John A. Duffie, William A. Beckman." : {
        courseno: "ARE 532, ME 439",
        FirstOfISBN: 9780470873663,
        stockno: ["2517524", "2361300038"]
    },
    "Workplace strategies and facilities management / Rick Best, Craig Lanston, Gerard de Valence." : {
        courseno: "ARE 520",
        FirstOfISBN: 9780750651509,
        stockno: 2519000
    },
    "Principles of heating ventilating and air conditioning / Ronald H. Howell." : {
        courseno: "ARE 345, ARE 342",
        FirstOfISBN: 9781939200730,
        stockno: 2511800001
    },
    "Structures / Daniel L. Schodek, Martin Bechthold." : {
        courseno: "ARE 446",
        FirstOfISBN: 9781292040820,
        stockno: 2511500011
    },
    
    // are finish
    // ae start
    "Gas dynamics / James E. A. John." : {
        courseno: "AE 325",
        FirstOfISBN: 9780131206687,
        stockno: 2381100003
    },
    "Aircraft performance and design / John D. Anderson, Jr." : {
        courseno: "AE 240",
        FirstOfISBN: 9780070019713,
        stockno: 2381100006
    },
    "Viscous fluid flow / Frank M. White." : {
        courseno: "AE 524, ME 532, ME 539",
        FirstOfISBN: 9780071244930,
        stockno: ["2381100010", "2368500"]
    },
    "Aircraft design : a conceptual approach / Daniel P. Raymer." : {
        courseno: "AE 427",
        FirstOfISBN: 9781600869112,
        stockno: 2381200016
    },
    "Introduction to flight / John D. Anderson, Jr." : {
        courseno: "AE 220",
        FirstOfISBN: 9789814636186,
        stockno: 2381500020
    },
    "Aircraft structures for engineering students / T.H.G. Megson." : {
        courseno: "AE 328",
        FirstOfISBN: 9780081009147,
        stockno: 2381700024
    },
    "Introduction to aircraft flight mechanics / Thomas R. Yechout, et al." : {
        courseno: "AE 426",
        FirstOfISBN: 9781624102547,
        stockno: 2381700025
    },
    "Elements of propulsion : gas turbines and rockets / Jack D. Mattingly, Keith M. Boyer." : {
        courseno: "AE 422",
        FirstOfISBN: 9781624103711,
        stockno: 2381700026
    },
    "Fundamentals of aerodynamics / John D. Anderson, Jr." : {
        courseno: "AE 333",
        FirstOfISBN: 9781259251344,
        stockno: 2381700027
    },
    "Aircraft systems : mechanical, electrical, and avionics subsystems integration / Ian Moir, Allan Seabridge." : {
        courseno: "AE 401",
        FirstOfISBN: 9780470059968,
        stockno: 2381800028
    },
    "Applied numerical methods with MATLAB for engineers and scientists / Steven C. Chapra." : {
        courseno: "AE 355, MATH513",
        FirstOfISBN: 9781260083255,
        stockno: 2381900029
    },
    "Principles of helicopter aerodynamics / J. Gordon Leishman." : {
        courseno: "AE 448",
        FirstOfISBN: 9781107013353,
        stockno: 2381900030
    },
    "Flight stability and automatic control / Robert C. Nelson." : {
        courseno: "AE 446, AE 540, AE 426",
        FirstOfISBN: 9780071158381,
        stockno: 2382500
    },
    "Mechanics and thermodynamics of propulsion / Philip G. Hill, Carl R. Peterson." : {
        courseno: "AE 422, ME 422",
        FirstOfISBN: 9780201146592,
        stockno: ["2384500", "2365051"]
    },
    "Modern compressible flow : with historical perspective / John D. Anderson, Jr." : {
        courseno: "AE 520",
        FirstOfISBN: 9780072424430,
        stockno: 2385000
    },
    "Mechanics of materials." : {
        courseno: "AE 228",
        FirstOfISBN: 9781119676294
    },
    
    // ae finish
    // as start
    "Mathematics of investment and credit / Samuel A. Broverman." : {
        courseno: "AS 201",
        FirstOfISBN: 9781566987677,
        stockno: 2131100067
    },
    "Actuarial mathematics / Newton L. Bowers, et al." : {
        courseno: "AS 381",
        FirstOfISBN: 9780938959465,
        stockno: 2131200077
    },
    "SOA exam FM/2 / Gail Hall, Richard London." : {
        courseno: "AS 288",
        FirstOfISBN: 9781625420077,
        stockno: 2131200078
    },
    "ACTEX SOA exam FM study manual / Matthew J. Hassett, et al." : {
        courseno: "AS 288",
        FirstOfISBN: 9781625423849,
        stockno: 2131200079
    },
    "Loss models: from data to decisions / Stuart A. Klugman, et al." : {
        courseno: "AS 483",
        FirstOfISBN: 9781118315323,
        stockno: 2131300099
    },
    "Survival analysis: a self-learning text / David G. Kleinbaum, Mitchel Klein." : {
        courseno: "AS 475",
        FirstOfISBN: 9781441966452,
        stockno: 2131400106
    },
    "ACTEX FM/2 study manual / Matthew J. Hassett, et al." : {
        courseno: "AS 288",
        FirstOfISBN: 9781566989633,
        stockno: 2131400107
    },
    "ACTEX FM study manual / Matthew J. Hassett, et al." : {
        courseno: "AS 288",
        FirstOfISBN: 9781625422095,
        stockno: 2131400108
    },
    "Derivatives markets / Robert L. McDonald." : {
        courseno: "AS 498",
        FirstOfISBN: 9781292021256,
        stockno: 2131500111
    },
    "Models for quantifying risk / Stephen J. Camilli, et al." : {
        courseno: "AS 482",
        FirstOfISBN: 9781625423474,
        stockno: 2131700128
    },
    "ACTEX SOA exam P study manual / Samuel A. Broverman." : {
        courseno: "AS 388",
        FirstOfISBN: 9781635881851,
        stockno: 2131800135
    },
    "Mathematics of investment and credit / Samuel A. Broverman." : {
        courseno: "AS 201",
        FirstOfISBN: 9781635882216,
        stockno: 2131800136
    },
    
    // as finish


}

// ise303 ise307 ise420 
// COLUMN 30 ARE BOTTOM SHELF COURSE NUMBER IS MISSING

// checking duplicates


window.onload = function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block'; // Show the popup

    // Hide the popup after 5 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 10000);
}

function imagenote() {
    var popupp = document.getElementById('imageloadwarning');
    popupp.style.display = 'block'; // Show the popup

    // Hide the popup after 5 seconds
    setTimeout(function() {
        popupp.style.display = 'none';
    }, 15000);
}

// Add any other necessary JavaScript initializations here


// styling properties
// dark mode
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


// display each item 
document.getElementById('courseBtn').addEventListener('click', function() {
    document.getElementById('COURSESEARCH').style.display = 'block';
    document.getElementById('BOOKSEARCH').style.display = 'none';
});

document.getElementById('bookBtn').addEventListener('click', function() {
    document.getElementById('COURSESEARCH').style.display = 'none';
    document.getElementById('BOOKSEARCH').style.display = 'block';
});


// Autocomplete feature
let input = document.getElementById('courseNumber');
input.addEventListener('input', updateSuggestions);

function updateSuggestions() {
    let inputValue = input.value.toLowerCase().replace(/\s/g, '');
    let suggestions = [];

    if (inputValue !== '') {
        suggestions = Object.keys(courses).filter(book => book.startsWith(inputValue));
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
function searchCourse() {
    let courseNumber = document.getElementById('courseNumber').value.toLowerCase().replace(/\s/g, '');
    let result = courses[courseNumber];
    if(result) {
        // document.getElementById('result').innerText = `Book Name: ${result.name} Row: ${result.row}, Column: ${result.column}, Shelf: ${result.shelf}`;
        document.getElementById('bookname').innerText = `Book Name: ${result.name}`;
        document.getElementById('row').innerText = `Row: ${result.row}`;  
        document.getElementById('column').innerText = `Column: ${result.column}`;
        document.getElementById('shelf').innerText = `Shelf: ${result.shelf}`; 
        document.getElementById('columnImage').src= `images/${result.column}.jpg`; 
        document.getElementById('rowImage').style.display = 'block';
        document.getElementById('rowImage').src= `images/row${result.row}.jpg`; 
    } else {
        document.getElementById('coursenotfounddiv').style.display = 'block';
        document.getElementById('coursenotfound').innerText = "Course Not Found. Try Another Course Number.";

        document.getElementById('columnImage').src = 'images/KFUPM.png';
        document.getElementById('rowImage').src = 'images/KFUPM.png';
        document.getElementById('courseNumber').value = ''; // Clear the input field

        document.getElementById('bookname').innerText = '';
        document.getElementById('row').innerText = '';  
        document.getElementById('column').innerText = '';
        document.getElementById('shelf').innerText = ''; 

          // Make the text disappear after 5 seconds (5000 milliseconds)
          setTimeout(function() {
            document.getElementById('coursenotfound').innerText = "";
            document.getElementById('coursenotfounddiv').style.display = 'none';
        }, 5000);
    }
}


function searchBook() {
    let bookName = document.getElementById('bookName').value;
    let courseresult = books[bookName];
    if(courseresult){
        // const bookName = Object.keys(books)[0];
        document.getElementById('booktitle').innerText = `Book Name: ${bookName}`;
        document.getElementById('coursenumber').innerText = `Course Number: ${courseresult.courseno}`;
        document.getElementById('isbn').innerText = `ISBN: ${courseresult.FirstOfISBN}`;
        document.getElementById('stocknumber').innerText = `Stock Number: ${courseresult.stockno}`;
    } else {
        document.getElementById('booknotfounddiv').style.display = 'block';
        document.getElementById('booknotfound').innerText = "Book Not Found. Try Another BOOK NAME.";

        document.getElementById('booktitle').innerText = '';
        document.getElementById('coursenumber').innerText = '';
        document.getElementById('isbn').innerText = '';
        document.getElementById('stocknumber').innerText = '';

        setTimeout(function() {
            document.getElementById('booknotfound').innerText = "";
            document.getElementById('booknotfounddiv').style.display = 'none';
        }, 5000);
    }
}

// Autocomplete feature for book search
let bookInput = document.getElementById('bookName');
bookInput.addEventListener('input', updateBookSuggestions);

function updateBookSuggestions() {
    let inputValue = bookInput.value;
    let suggestions = [];

    if (inputValue !== '') {
        suggestions = Object.keys(books).filter(book => book.toLowerCase().startsWith(inputValue.toLowerCase()));
    }

    // Clear previous suggestions
    let suggestionBox = document.getElementById('BooksuggestionBox');
    suggestionBox.innerHTML = '';

    // Create new suggestions
    suggestions.forEach(suggestion => {
        let div = document.createElement('div');
        div.textContent = suggestion;
        div.addEventListener('click', function() {
            bookInput.value = this.textContent;
            suggestionBox.innerHTML = '';
        });
        suggestionBox.appendChild(div);
    });
}

// styling and stuff
// dark mode

