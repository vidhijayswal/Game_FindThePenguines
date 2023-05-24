$(document).ready(function () {
    let highscore = localStorage.getItem('highscore') || 0;
        score = 0;
    let yeek = new Audio('./sounds/penguin.wav');
    let roar = new Audio('./sounds/yeti.wav');

    //This code will run after your page loads

    let nodels = $('#title').nextAll('div');
    let randomdiv = Math.random() * nodels.length;

    randompenguin();
    scoreboard();


    $("#yeti").mousedown(function () {
        $("#yeti").addClass('active');
        roar.play();
        $("#penguin1").removeClass('active');
        $("#penguin2").removeClass('active');
        $("#penguin3").removeClass('active');
        $("#penguin4").removeClass('active');
        $("#penguin5").removeClass('active');
        $("#penguin6").removeClass('active');
        $("#penguin7").removeClass('active');
        $("#penguin8").removeClass('active');
//        setTimeout(function () {
//            $("#yeti").removeClass('active');
//            randompenguin();
//            score = 0;
//            scoreboard();
//        }, 1000);
        $("#showtext").text("play again!");
        $("#showtext").after(
            "<h2> Score: " + score + "</h2><t><h2>High Score: " + highscore + "</h2>"
        );
        $("#layout").css("display", "block");
        score = 0;
        scoreadd();
    });
    $("#penguin1").click(function () {
        $("#penguin1").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin2").click(function () {
        $("#penguin2").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin3").click(function () {
        $("#penguin3").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin4").click(function () {
        $("#penguin4").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin5").click(function () {
        $("#penguin5").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin6").click(function () {
        $("#penguin6").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
    $("#penguin7").click(function () {
        $("#penguin7").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();

    });
    $("#penguin8").click(function () {
        $("#penguin8").addClass('active');
        yeek.play();
        
        if (score > highscore) {
            highscore = score;
        }
        scoreadd();
    });
//    $("#penguin9").click(function () {
//        $("#penguin9").addClass('active');
//        yeek.play();
//        score++;
//        if (score > highscore) {
//            highscore = score;
//        }
//        scoreadd();
//    });

    function randompenguin() {
        nodels.each(function () {
            let tempdivs = nodels;
            for (let i = 0; i < tempdivs.length; i++) $(tempdivs[i]).remove();
            rndmze(tempdivs);
            for (let i = 0; i < tempdivs.length; i++) $(tempdivs[i]).appendTo("#gameholder");
        });

    };

    function rndmze(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };
    
    function scoreadd() {
        score++;
            console.log("xyz");
        if (score < nodels.length - 1) {
            

        } else if (score == 8) {

            $("#showtext").text("Congratulations You Win!");
            $("#showtext").after(
                "<h2> Score: " + score + "</h2><t><h2>High Score: " + highscore + "</h2>"
            );
            $("#layout").css("display", "block");
        }
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
        }
        scoreboard();
    };

    function scoreboard() {
        $('#score').html(
            "<h2>Score: " + score + "</h2>&nbsp;<h2> HighScore: " + highscore + "</h2>"
        );
    };
     $("#try").click(function () {
        location.reload();
    });
});
