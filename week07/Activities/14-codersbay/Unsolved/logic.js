var config = {
    apiKey: "AIzaSyDerqt-KWOdE6V-OzXUeJIkng8oYxb8B4M",
    authDomain: "utah-codin.firebaseapp.com",
    databaseURL: "https://utah-codin.firebaseio.com",
    projectId: "utah-codin",
    storageBucket: "utah-codin.appspot.com",
    messagingSenderId: "263384692770"
};

firebase.initializeApp(config);

var database = firebase.database()

var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

database.ref().on("value", function(snapshot) {

    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

        var data = snapshot.val()

        $("#highest-bidder").text(data.highBidder)
        $("#highest-price").text(data.highPrice)

    } else {
        $("#highest-bidder").text(highBidder)
        $("#highest-price").text(highPrice)
    }
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});




$("#submit-bid").on("click", function(event) {
    event.preventDefault();
    var highBidder = $("#bidder-name").val()
    var bidderPrice = $("#bidder-price").val()

    if (bidderPrice > highPrice) {

        database.ref().set({
            highBidder: highBidder,
            highPrice: bidderPrice,

        });
        alert("You are now the highest bidder.");
        $("#highest-bidder").text(highBidder)
        $("#highest-price").text(bidderPrice)
        highPrice = bidderPrice




    } else {
        alert("Sorry that bid is too low. Try again.");
    }

});