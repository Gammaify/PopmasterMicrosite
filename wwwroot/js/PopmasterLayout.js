$(document).ready(function () {
    var pathName = window.location.pathname;
    function TurnOnCardGame() {
        $("#gameTypeCheck").prop("checked", true)

        $.get("https://gingerfox.co.uk/api/ProductPrice?productid=1140", function (data, status) {

            if (data.lineSalePercentage != 0) {
                var discountPercentage = data.productPrice / 100 * data.lineSalePercentage;


                var ProductPriceString = "£" + (data.productPrice - discountPercentage).toFixed(2);
                $("#ProductPrice").text(ProductPriceString + " ");
            }
            else {
                $("#ProductPrice").text("£" + data.productPrice + " ");
            }
        });

        var cardGameURL = "card-game"
        window.history.pushState(null, null, cardGameURL)
        $(".cardGameText").removeClass("white");
        $(".cardGameText").addClass("purple");
        $(".boardGameText").removeClass("purple")
        $(".boardGameText").addClass("white")

        $(".HowToPlayBtn").removeClass("HowToPlayBtn").addClass("WhyToBuyFromUsBtn").text("Buy From Us")
        $("#HowToPlay").hide();
        $(".boxContentsContainer p").text("Popmaster Card Game Box Includes:");

        $(".review1Text").text("I love music and quizzes so this is ideal...");
        $(".review1ByText").text("Review by WorcesterBlue");

        $(".review2Text").text("Be warned this game is very addictive...");
        $(".review2ByText").text("Review by Kazza248");

        $(".review3Text").text("This game is great fun for anyone who loves PopMaster...");
        $(".review3ByText").text("Review by LAP");

        $(".review4Text").text("Great fun and finally a playable Popmaster game!");
        $(".review4ByText").text("Review by Movie Buff");

        $(".review5Text").text("This is a nice little quiz game for a music fan…");
        $(".review5ByText").text("Review by B.Bailey");

        $(".review6Text").text("A Good version of Popmaster that works in card form.");
        $(".review6ByText").text("Review by ArtichokesForAll");

        $(".LifestyleImg1Src").attr("src", $(".cardGameImg1").val())
        $(".LifestyleImg2Src").attr("src", $(".cardGameImg2").val())
        $(".LifestyleImg3Src").attr("src", $(".cardGameImg3").val())
        $(".LifestyleImg4Src").attr("src", $(".cardGameImg4").val())

        $(".inTheBoxItem1").text("Over 200 questions,");
        $(".inTheBoxItem2").text("Easy play rules,");
        $(".inTheBoxItem3").text("Access to bonus digital questions,");
        $(".inTheBoxItem4").text("Access to printable scorepad.");
        $(".inTheBoxItem5").hide()
        $(".inTheBoxItem6").hide()
        $(".inTheBoxItem7").hide()

        $(".totalReviews").text("(40 Reviews)")

        $("#a4").text("This game is perfect for 2 or more players, and can be played in teams to accommodate larger groups.");
        $("#q6").text("Q. How many rounds make a game?");
        $("#a6").text("We recommend a minimum of 3 rounds per game, but you can play as many or as few as you want.")
        $('.reviewCarousel').owlCarousel('refresh');
    }

    function TurnOnBoardGame() {
        $("#gameTypeCheck").prop("checked", false)

        $.get("https://gingerfox.co.uk/api/ProductPrice?productid=1139", function (data, status) {

            if (data.lineSalePercentage != 0) {
                var discountPercentage = data.productPrice / 100 * data.lineSalePercentage;


                var ProductPriceString = "£" + (data.productPrice - discountPercentage).toFixed(2);
                $("#ProductPrice").text(ProductPriceString + " ");
            }
            else {
                $("#ProductPrice").text("£" + data.productPrice + " ");
            }
        });

        var boardGameURL = "board-game"
        window.history.pushState(null, null, boardGameURL)
        $(".cardGameText").removeClass("purple");
        $(".cardGameText").addClass("white");
        $(".boardGameText").removeClass("white")
        $(".boardGameText").addClass("purple")

        $(".WhyToBuyFromUsBtn").removeClass("WhyToBuyFromUsBtn").addClass("HowToPlayBtn").text("How To Play")
        $("#HowToPlay").show();
        $(".boxContentsContainer p").text("Popmaster Board Game Box Includes:")

        $(".review1Text").text("Best present ever for a music quiz lover.");
        $(".review1ByText").text("Review by Mrs A.");

        $(".review2Text").text("Brilliant game to match the radio quiz.");
        $(".review2ByText").text("Review by Paul Dickens");

        $(".review3Text").text("The creators have done a really good job...");
        $(".review3ByText").text("Review by R. WEST-SOLEY");

        $(".review4Text").text("A fun board game with tons of replayability.");
        $(".review4ByText").text("Review by OldGame");

        $(".review5Text").text("The quality of the game feels really well made...");
        $(".review5ByText").text("Review by Darren");

        $(".review6Text").text("Quick and easy to play, great for music fans.");
        $(".review6ByText").text("Review by Michael");

        $(".LifestyleImg1Src").attr("src", $(".boardGameImg1").val())
        $(".LifestyleImg2Src").attr("src", $(".boardGameImg2").val())
        $(".LifestyleImg3Src").attr("src", $(".boardGameImg3").val())
        $(".LifestyleImg4Src").attr("src", $(".boardGameImg4").val())

        $(".inTheBoxItem1").text("Game Board,");
        $(".inTheBoxItem2").text("Playing Pieces,");
        $(".inTheBoxItem3").text("Answer Tokens,");
        $(".inTheBoxItem4").text("Over 100 Questions,");
        $(".inTheBoxItem5").show()
        $(".inTheBoxItem5").text("3 In 10 Question Answer Pad,")
        $(".inTheBoxItem6").show()
        $(".inTheBoxItem6").text("Over 60 Bonus Category Questions,")
        $(".inTheBoxItem7").show()
        $(".inTheBoxItem7").text("Additional Digital 3 In 10 Questions.")

        $(".totalReviews").text("(74 Reviews)")

        $("#a4").text("We recommend 2-4 players; however, this can easily be played in teams if you have more players");
        $("#q6").text("Q. What do I do if I lose a piece of the game?");
        $("#a6").html('We understand how pieces can get misplaced or lost. <a href="https://gingerfox.co.uk/information/contact-us">Contact us</a> if you need a replacement part.')

        $('.reviewCarousel').owlCarousel('refresh');
    }
    if (pathName == "/card-game") {
        TurnOnCardGame();
    }
    else {
        TurnOnBoardGame();
    }


    $("#gameTypeCheck").on("change", function () {
        if ($(this).prop("checked")) {
            //Card Game Selected
            TurnOnCardGame();
        }
        else {
            //Board Game Selected
            TurnOnBoardGame();
        }
    })
    $(".FAQsBtn").click(function (event) {
        event.preventDefault();
        //if (window.location.pathname == "/") {
        //    var element = document.querySelector("#FAQs");
        //    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        //    /*            window.scroll(0, window.scrollY - 154)*/

        //    player.stopVideo();
        //    window.history.pushState({}, "", "#FAQs")
        //}
        //else {
        //    location.href = "/#FAQs";
        //}

        const element = document.getElementById('FAQs');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();

        var gameTypeCheck = $("#gameTypeCheck").prop("checked");
        if (gameTypeCheck) {
            window.history.pushState({}, "", "/card-game#FAQs")
        }
        else {
            window.history.pushState({}, "", "/board-game#FAQs")
        }

    })

    if (window.location.hash == "#FAQs") {
        const element = document.getElementById('FAQs');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);


    }

    $(".ReviewsBtn").click(function (event) {
        event.preventDefault();
        //if (window.location.pathname == "/") {
        //    var element = document.querySelector("#Reviews");
        //    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        //    player.stopVideo();
        //    window.history.pushState({}, "", "#Reviews")
        //}
        //else {
        //    location.href = "/#Reviews";
        //}

        const element = document.getElementById('Reviews');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();
        var gameTypeCheck = $("#gameTypeCheck").prop("checked");
        if (gameTypeCheck) {
            window.history.pushState({}, "", "/card-game#Reviews")
        }
        else {
            window.history.pushState({}, "", "/board-game#Reviews")
        }
    })

    if (window.location.hash == "#Reviews") {
        const element = document.getElementById('Reviews');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);


    }
    $(document).on("click", ".WhyToBuyFromUsBtn", function (event) {
        event.preventDefault();
        //if (window.location.pathname == "/") {
        //    var element = document.querySelector("#BuyFromUs");
        //    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        //    player.stopVideo();
        //    window.history.pushState({}, "", "#BuyFromUs")
        //}
        //else {
        //    location.href = "/#BuyFromUs";
        //}

        const element = document.getElementById('BuyFromUs');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();
        var gameTypeCheck = $("#gameTypeCheck").prop("checked");
        if (gameTypeCheck) {
            window.history.pushState({}, "", "/card-game#BuyFromUs")
        }
        else {
            window.history.pushState({}, "", "/board-game#BuyFromUs")
        }

    })

    $(".HowToPlayBtn").click(function (event) {
        event.preventDefault();


        const element = document.getElementById('HowToPlay');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();
        player.playVideo();
        var gameTypeCheck = $("#gameTypeCheck").prop("checked");
        if (gameTypeCheck) {
            window.history.pushState({}, "", "/card-game#HowToPlay")
        }
        else {
            window.history.pushState({}, "", "/board-game#HowToPlay")
        }

    })

    if (window.location.hash == "#HowToPlay") {
        const element = document.getElementById('HowToPlay');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();
        player.playVideo();
    }

    $(document).on("click", ".InBoxBtn", function () {

        const element = document.getElementById('InTheBox');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);

        player.stopVideo();

        var gameTypeCheck = $("#gameTypeCheck").prop("checked");
        if (gameTypeCheck) {
            window.history.pushState({}, "", "/card-game#InTheBox")
        }
        else {
            window.history.pushState({}, "", "/board-game#InTheBox")
        }




    })

    if (window.location.hash == "#InTheBox") {
        const element = document.getElementById('InTheBox');
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 3);
        window.scrollTo(0, middle);
    }
})