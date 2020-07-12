var secretWord;
var numLetters;

function insert() {
    createScreen();
    gameStart();
}


//matches class with the word
function tryLetter() {
    var pushLetter = document.getElementById("input-try").value;
    var teste = $("li").hasClass(pushLetter);
    console.log(teste);

    if (teste === true) {

        $('.' + pushLetter).html(pushLetter);
    }

    hangmanTry(teste);
}







/*
$("p").add("div").addClass("widget");

    $(document).ready(function() {
        $(".demo").html("Hello, World!");
    });
    */

/*
g = document.createElement('div');
g.setAttribute("id", "Div1");

randomNum2 = randomNum2 + "px";
*/

/*
while (numLetters > 0) {
    document.createElement("p");
    test = document.createTextNode("testando aqui!");
    test.setAttribute("id", "p" + numTest);

    numLetters--;
    numTest++;

    console.log(numLetters);
}
*/













/*

var randomNum1;
var randomNum2;

var youLoose = document.createElement("p");
var youLooseText = document.createTextNode("YOU LOSE !");

var scoreCounter = 0;

function catch_count() {
    //Change the margin from the YES button
    randomNum1 = (Math.random() * 450) + 1;
    randomNum1 = randomNum1 + "px";
    document.getElementById("catch").style.margin = randomNum1; //TO DO youLoose = setInterval(loose, 1000);

    //Change the margin from the NO ! button
    randomNum2 = (Math.random() * 400) + 1;
    randomNum2 = randomNum2 + "px";
    console.log(randomNum2);
    document.getElementById("dont_catch").style.margin = randomNum2;

    /*  if (randomNum1 % 2 != 0) {
          //   document.getElementById("dont_catch").innerHTML = '<button type="button" id="dont_catch2" onclick="you_loose()">NO!</button>';
          // document.getElementById("catch").innerHTML = '<button type="button" id="catch2" onclick="catch_count()">YES</button>';

          document.createElement("button");

      }*/


/*
//Score counter
scoreCounter = scoreCounter + 1;
document.getElementById("score").innerHTML = "SCORE:" + scoreCounter;
}

function you_loose() {

    document.getElementById("title").innerHTML = "<h1> YOU LOSE!</h1>" + "<h2>SCORE: </h2>" + scoreCounter;

}

*/