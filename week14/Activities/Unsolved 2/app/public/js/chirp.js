// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps


// When user chirps


console.log("It's connected")

$.get("/chirps",function(res, err){

    for(i=0; i<res.length ; i++){
        console.log(res[i])
        var name = $("<p>")
        name.append(res[i].user,": ")
        name.append(res[i].message)
    $("#chirpsShow").append(name)
    
    }

})



// $("#submit").on("click", function(){

//     var newChirp = {
//         user: 
//     }

//     $.post("/chirps",function(res, err){
        
//         newChirp
        
//         })
// })


