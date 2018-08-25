$(document).ready(function () {
    // Creating variables to hold the number of wins, losses

    var wins = 0;
    var losses = 0;

    // Randomly choose a number for each crystal- between 19 and 120
    var computerGuess = Math.floor(Math.random() * 121) + 1;

    console.log(computerGuess);

    var crystal1 = '';
    var crystal2 = '';
    var crystal3 = '';
    var crystal4 = '';
    var summarizer = 0;


    //add initialize function
    // Use a function to initialize our Game.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function initializeGame() {
        summarizer = "";
        $(".crystals, #summarizer, #verdict, #computer-guess").empty();
        $('#verdict').hide();
        $('#reset').hide();
        computerGuess = Math.floor(Math.random() * 121) + 1;
    }

    $("#reset").on("click", function () {

        // Call initializeCalculater so we can reset the state of our app
        initializeGame();
        pickCrystalNumbers()
        computerGuess = Math.floor(Math.random() * 121) + 1;

    });

    // Randomly choose a number for each crystal- between 1 and 12
    function pickCrystalNumbers() {

        var crystalValues = [];

        for (var i = 0; i < 4; i++) {
            crystalValues.push(Math.floor(Math.random() * 13) + 1);
        }

        // //want to assign images from array but...
        //      var crystalPix = ["assets/images/crystal0", "assets/images/crystal1.jpeg", "assets/images/crystal2.jpeg", "assets/images/crystal3.jpeg",];

        //     for (var i = 0; i < 4; i++) {
        //         displayCrystal = "assets/images/crystal" + i + ".jpeg";
            
        //         $(".crystals").attr('src', displayCrystal);
        //         console.log(displayCrystal);
      
        //     }
          
           
        // Assign each of the values and images to the html
        $('#crystal1').val(crystalValues[0]).attr('src', 'assets/images/crystal0.jpeg');
        $('#crystal2').val(crystalValues[1]).attr('src', 'assets/images/crystal1.jpeg');
        $('#crystal3').val(crystalValues[2]).attr('src', 'assets/images/crystal2.jpeg');
        $('#crystal4').val(crystalValues[3]).attr('src', 'assets/images/crystal3.jpeg');
     };


    pickCrystalNumbers();


    $(".crystals").on("click", function () {

       
        var selectedValue = $(this).val();

        if ($('#verdict').is(':visible')) {

            initializeGame();
        }


        else if ((summarizer < computerGuess) && (summarizer > 0)) {

            // Use parseInt to convert our string representation of numbers into actual integers
            summarizer = parseInt(summarizer);
            selectedValue = parseInt(selectedValue);

            summarizer += selectedValue;
        }

        else if ((summarizer === computerGuess) && (summarizer > 0)) {
            wins++;
            // say you win!
            $('#verdict').show().append('<h1>You should feel good about this. Really</h1>');

            //show the secret number 

            $("#computer-guess").append("The Secret Number: " + computerGuess);

        
            //restarts
            $('#reset').show();

        }

        else if (summarizer > computerGuess) {
            losses++;

            // say you lose!
            $('#verdict').show().append('Don\'t despair Your luck will turn around one day');

            //show the secret number 

            $("#computer-guess").append("The Secret Number: " + computerGuess);


            // $(".crystals, #summarizer", "#computer-guess").empty();
      

            //restarts
            $('#reset').show();
        }

        else {
            summarizer = selectedValue;
        }

        console.log(summarizer);

        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#summarizer").val(summarizer);
        $("#summarizer").text("Your Total = " + summarizer);

    

    });

    
});
