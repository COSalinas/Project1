$(document).ready(function () {
  $(".datepicker").datepicker();

  $("#search-button").on("click", function () {
  
    var userDate = $("#date").val();
    var formattedDate = moment(userDate).format('YYYY-MM-DD');

    console.log(formattedDate);

      $.ajax({
        url: "https://api.eventful.com/json/events/search?app_key=B3cccB54Cfm7csbL&category=music&include=popularity&location=United+States&page_size=4&date=" + formattedDate,
        method: "GET",
        dataType: "jsonp",
      }).then(function(response) {
          console.log(response);
        
          $("#artist").text("Artist: " + response.events.event.title);
          $("#artist").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#artist").html("Venue: " + response.events.event.venue_name);

          console.log("Artist: " + response.events.event.title);
          console.log("Location: " + response.events.event.city_name + response.events.event.region_name);
          console.log("Venue: " + response.events.event.venue_name);


          $(".title-two").html("Artist: " + response.events.event.title);
          $("#location-two").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-two").html("Venue: " + response.events.event.venue_name);

          $(".title-three").html("Artist: " + response.events.event.title);
          $("#location-three").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-three").html("Venue: " + response.events.event.venue_name);

          $(".title-four").html("Artist: " + response.events.event.title);
          $("#location-four").html("Location: " + response.events.event.city_name + response.events.event.region_name);
          $("#venue-four").html("Venue: " + response.events.event.venue_name);
      })  
  })
})
