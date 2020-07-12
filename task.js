var tasks = [];


function gameStart() {

    $("#word").remove();
    $("#input-word").remove();

    $('.input-try1').append('<input type="text" id="input-try">');

    $('.input-try2').append('<button type="button" id="trying" onclick="tryLetter()">TRY THIS LETTER</button>');
}

//cria a tela da palavra secreta
function createScreen(secretWord) {
    secretWord = document.getElementById("word").value;
    //split words
    secretWordSplit = secretWord.split("");

    var letter = {
        data: {
            HiddenWord: secretWordSplit
        }
    }
    var numLetters = secretWord.length;


    var CounterForSecretWordSplit = 0; //to create classes using the secretWordSplit [arrayCounter]

    //create the lists
    while (numLetters > 0) {

        var list = "<ul>" // check
        secretWordSplit.forEach(() => {
            list += "<li class =" + letter.data.HiddenWord[CounterForSecretWordSplit] + ">" + "_" + "</li>"

            document.getElementById("list").innerHTML = list;

            numLetters--;
            CounterForSecretWordSplit++;

        })

        list += "</ul>";

    }

}

function hangmanTry(teste) {
    var counterHangman = 6;

    counterHangman.forEach(() => {
        if (teste === false) {
            var textOfTry = "<h2>Você ainda possui" + counterHangman + "tentativas</h2>";
            document.getElementById("hangmanTeste").innerHTML = textOfTry;
        }
    })

} //// SÓ MERDA AQUI BRO