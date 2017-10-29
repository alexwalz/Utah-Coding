// Initialize Firebase
var config = {
    apiKey: "AIzaSyDerqt-KWOdE6V-OzXUeJIkng8oYxb8B4M",
    authDomain: "utah-codin.firebaseapp.com",
    databaseURL: "https://utah-codin.firebaseio.com",
    projectId: "utah-codin",
    storageBucket: "utah-codin.appspot.com",
    messagingSenderId: "263384692770"
};


firebase.initializeApp(config);

var database = firebase.database();
var initialValue = 100;
var clickCounter = initialValue;


database.ref().on("value", function(snapshot) {
    $("#click-value").text(snapshot.val().clickCounter);
    clickCounter = snapshot.val().dbCount;
    $("#click-value").text(clickCounter)
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

$("#click-button").on("click", function() {
    clickCounter--;
    if (clickCounter === 0) {
        alert("Phew! You made it! That sure was a lot of clicking.");
        database.ref().set({
            dbCount: clickCounter
        });
        clickCounter = initialValue;
    }
    database.ref().set({
        dbCount: clickCounter
    });

});

$("#restart-button").on("click", function() {
    clickCounter = initialValue;
    console.log(clickCounter);
    $("#click-value").text(clickCounter);
});