var timer = 45;
var interval;



$(".startBtn").on('click', function () {

    document.getElementById("questions").style.visibility = "visible";
    $("btn").remove(".startBtn");
    timeCount();
});

function timeCount() {
    timer = 45;
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
    console.log(timer);
}

function decrement() {
    timer--;
    $("#start-timer").html("<h2>" + timer + "</h2>");

    if (timer === 0) {
        stop();
        document.getElementById("questions").style.visibility = "hidden";
    }
}

function stop() {
    clearInterval(interval);
}

function done() {

    var question1 = document.fashionForm.question1.value;
    var question2 = document.fashionForm.question2.value;
    var question3 = document.fashionForm.question3.value;
    var question4 = document.fashionForm.question4.value;
    var question5 = document.fashionForm.question5.value;
    var question6 = document.fashionForm.question6.value;
    var question7 = document.fashionForm.question7.value;

    var correct = 0;


    if (question1 == "c") {
        correct++;
        
    }

    if (question2 == "a") {
        correct++;
    }

    if (question3 == "d") {
        correct++;
    }

    if (question4 == "b") {
        correct++;
    }
    if (question5 == "a") {
        correct++;
    }

    if (question6 == "b") {
        correct++;
    }

    if (question7 == "d") {
        correct++;
    }


   
    
    

        var message = ["Awesome, Awesome, AWESOME!!", "Better Luck Next Time."];
        var images = ["assets/images/winner.gif", "assets/images/lose.gif"];

        var range;

        if (correct > 6) {
            range = 0;

        }
        if (correct < 6) {
            range = 1;
        }

        document.getElementById("message").innerHTML = message[range];
        document.getElementById("score").innterHTML = "You got " + correct + "correct.";
        document.getElementById("pics").src = images[range];
    

}