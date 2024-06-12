$(document).ready(function () {



    const client = window.ShopifyBuy.buildClient({
        domain: 'ginger-fox-store.myshopify.com',
        storefrontAccessToken: '5f230d2d8cbccf9bbe5d60551645777f'
    });

    const productId = 'gid://shopify/Product/8777812279582';

    client.product.fetch(productId).then((product) => {
        var price = "£" + product.variants[0].price.amount;
        // Do something with the product
        $("#ProductPrice").text(price + " ");
    });

    $(".LifeStyleSlider").owlCarousel({
        loop: true,
        center: true,
        touchDrag: true,
        items: 4,
        margin: 5,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            630: {
                items: 2,
                center: false
            },
            992: {
                items: 3,
                center: false,
            },
            1400:
            {
                items: 5,
                center: false,
            }
        }
    });

    $(".reviewCarousel").owlCarousel({
        loop: true,
        center: true,
        touchDrag: true,
        items: 4,
        margin: 20,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            630: {
                items: 2,
                center: false
            },
            992: {
                items: 3,
                center: false,
            },
            1400:
            {
                items: 5,
                center: false,
            }
        }
    });

    $("#q1Card").click(function () {
        $("#q1").toggle();
        $("#a1").toggle();
        var element = document.getElementById("q1Card");
        element.classList.toggle("FAQAnswerCard");
    })

    $("#q2Card").click(function () {
        $("#q2").toggle();
        $("#a2").toggle();
        var element = document.getElementById("q2Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q3Card").click(function () {
        $("#q3").toggle();
        $("#a3").toggle();
        var element = document.getElementById("q3Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q4Card").click(function () {
        $("#q4").toggle();
        $("#a4").toggle();
        var element = document.getElementById("q4Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q5Card").click(function () {
        $("#q5").toggle();
        $("#a5").toggle();
        var element = document.getElementById("q5Card");
        element.classList.toggle("FAQAnswerCard");
    })
    $("#q6Card").click(function () {
        $("#q6").toggle();
        $("#a6").toggle();
        var element = document.getElementById("q6Card");
        element.classList.toggle("FAQAnswerCard");
    })

})




/*window.addEventListener('scroll', function () { console.log(this.scrollY) })*/
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '9iqLtNH7s0g',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}



function onPlayerStateChange(event) {
    //if (event.data == 1) {
    //    setTimeout(stopVideo, 6000);
    //    done = true;
    //}
}
function stopVideo() {
    player.stopVideo();
}