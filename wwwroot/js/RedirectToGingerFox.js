
setTimeout(function () {
    var gameTypeCheck = document.referrer;

    if (gameTypeCheck.includes("/card-game")) {
        if (window.location.hostname == "popmasterdev.gingerfox.co.uk" || window.location.hostname == "localhost") {
            location.href = "https://dev.gingerfox.co.uk/MicrositeRedirect?Microsite=PopmastersCardGame";
        }
        else {
            location.href = "https://gingerfox.co.uk/MicrositeRedirect?Microsite=PopmastersCardGame";
        }
    }
    else {
        if (window.location.hostname == "popmasterdev.gingerfox.co.uk" || window.location.hostname == "localhost") {
            location.href = "https://dev.gingerfox.co.uk/MicrositeRedirect?Microsite=PopmastersBoardGame";
        }
        else {
            location.href = "https://gingerfox.co.uk/MicrositeRedirect?Microsite=PopmastersBoardGame";
        }
    }


}, 3000)
