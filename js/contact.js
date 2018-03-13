$(document).ready(function(){

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBGSuTp59U20rAefcq2E8xt-n8-g2laQuw",
        authDomain: "uncc-project1.firebaseapp.com",
        databaseURL: "https://uncc-project1.firebaseio.com",
        projectId: "uncc-project1",
        storageBucket: "uncc-project1.appspot.com",
        messagingSenderId: "963850276124"
    };
 
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var comment = "";

    // Capture Button Click
    $("#add-to-firebase").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();

        //Providing data to Firebase
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        comment = $("#comment-input").val().trim();

        var userComment = {
            name: name,
            email: email,
            comment: comment,
        };

        database.ref().push(userComment);

        name = $("#name-input").val("");
        email = $("#email-input").val("");
        comment = $("#comment-input").val("");
    });
});