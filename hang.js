 
window.onload = function () {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
  
  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  Draw = () => {
    switch (lives) {
       case 9 : /*frame 1*/
          context.beginPath();
         context.moveTo(0, 150);
         context.lineTo(150, 150);
         context.stroke();
         break;
        
       case 8 : /*frame 2*/
          context.beginPath();
          context.moveTo(10, 0);
          context.lineTo(10, 600);          
          context.stroke();
          break;     
       
       case 7: /*frame 3*/
         context.beginPath();
         context.moveTo(0, 5);
         context.lineTo(70, 5);
         context.stroke();
         break;
 
       case 6: /*frame 4*/
         context.beginPath();
         context.moveTo(60, 5);
         context.lineTo(60, 15);
         context.stroke();
         break;

         case 5:  /*head*/         
         context.beginPath();
         context.arc(60, 25, 10, 0, Math.PI*2, true);
         context.closePath();
         context.stroke();
         break;

       case 4: /*torso*/
         context.beginPath();
         context.moveTo(60, 36);
         context.lineTo(60, 70);
         context.stroke();
         break;
 
       case 3: /*right arm*/
         context.beginPath();
         context.moveTo(60, 46);
         context.lineTo(100, 50);
         context.stroke();
         break;
 
       case 2: /*left arm*/
          context.beginPath();
          context.moveTo(60, 46);
          context.lineTo(20, 50);
          context.stroke();
       break;
 
       case 1: /*right leg*/
         context.beginPath();
         context.moveTo(60, 70);
         context.lineTo(100, 100);
         context.stroke();
       break;
 
       case 0: /*left leg*/
          context.beginPath();
          context.moveTo(60, 70);
          context.lineTo(20, 100);
          context.stroke();
       break;
    } 
 }
 

  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss; 
          console.log(geuss);
          counter += 1; /* increments every time a right guess is made*/
          
        } 
      }
       
      var j = (word.indexOf(geuss));     
      if (j === -1) {
        lives -= 1;
        comments();
        Draw();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["everton", "liverpool", "wolves", "chelsea", "arsenal", "manchester-city", "leicester-city"],
        ["mr-mrs-smith", "black panther", "joker", "finding-nemo", "cars"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["Nicknamed the 'Toffies'", "2014 EPL runners up ", "Stadium is named 'The Molineux'", "London team with a UCL title", "London Stadium with 60,260 capacity", "2013 FA Cup runners up", "2020 FA Cup winners"],
        ["Starred Angelina Jolie & Brad Pitt", "Chadwick Boseman", "Clown villain", "Animated Fish", "Animated automobiles"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


