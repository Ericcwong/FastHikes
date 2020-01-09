var difficulty = $("#difficultyFilter").val();
var elevation = $("#elevationFilter").val();
var rating = $("#ratingFilter").val();
var length = $("#lengthFilter").val();
var filterIndexes = [];



$("#filterBtn").on("click", function(){
    console.log(difficulty);
    console.log(elevation);
    console.log(rating);
    console.log(length);
    //Run function to repopulate cards with these parameters.
    if(difficulty === "Easy"){
        for(var i = 0; i < obj.trails.length; i++){
            filterIndexes.push(obj.trails[i]);
        }
    }

})
