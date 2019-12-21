$("#geoloc-btn").on("click", function(event){
    event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(showPosition){
            console.log(showPosition);
            var lat = showPosition.coords.latitude;
            var long = showPosition.coords.longitude;
            $("#location-input").val(`${lat}, ${long}`);
        });
    } else {
    console.log("geoLocation not supported on browser")
    }
});

$("#submit-btn").on("click", function(event){
    event.preventDefault();
    var location = $("#location-input").val();
    var duration = $("#duration-input").val();
    console.log(location);
    console.log(duration);
});