$("#geoloc-btn").on("click", function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(showPosition){
            console.log(showPosition);
            console.log(showPosition.coords.latitude);
            console.log(showPosition.coords.longitude);
        });
    } else {
    console.log("geoLocation not supported on broswer")
    }
});

$("#submit-btn").on("click", function(event){
    event.preventDefault();
    var location = $("#location-input").val();
    var duration = $("#duration-input").val();
    console.log(location);
    console.log(duration);
});