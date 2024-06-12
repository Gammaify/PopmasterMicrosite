$(document).ready(function () {
    const client = window.ShopifyBuy.buildClient({
        domain: 'gingerfox.co.uk',
        storefrontAccessToken: '9dcbedebdf00220a1bd973d3d77d4955'
    });


    $("#BuyNowBtnBanner").click(function () {
        //const input = {
        //    lineItems: [{
        //        variantId: 'gid://shopify/ProductVariant/47080002748702',
        //        quantity: 1,
        //        customAttributes: [{ key: "Microsite", value: "Popmaster" }]
        //    }],
        //}
        //client.checkout.create(input).then((checkout) => {
        //    location.href = checkout.webUrl;
        //});

        location.href = "https://www.gingerfox.co.uk/products/popmaster-special-edition-board-game";
    });

    $("#BuyNowBtn").click(function () {
        //const input = {
        //    lineItems: [{
        //        variantId: 'gid://shopify/ProductVariant/47080002748702',
        //        quantity: 1,
        //        customAttributes: [{ key: "Microsite", value: "Popmaster" }]
        //    }]
        //}
        //client.checkout.create(input).then((checkout) => {
        //    location.href = checkout.webUrl;
        //});

        location.href = "https://www.gingerfox.co.uk/products/popmaster-special-edition-board-game";
    });
})