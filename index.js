var key = config.API_KEY;

function updateLimit(limit) {}

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/facts?limit=' + 3,
//     headers: { 'X-Api-Key': key},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

$(document).ready(function () {
  $(".loading").hide();  

  $("#limit").change(function () {
    var limit = $("#limit").val();
    // console.log(limit);
    $("#limitNumber").text(limit);

    if(limit){
      $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
        headers: { "X-Api-Key": key },
        contentType: "application/json",
        
        beforeSend: function () {
          $(".facts").empty();
          $(".loading").show();  
        },
        
        success: function (result) {
          $(".loading").hide();  

          result.forEach(fact => {
            // $(".facts").append("<p class='text-center'>" + fact["fact"] + "</p>");
            $(".facts").append("<div class='card text-center container' style='width: 50rem'><div class='card-body'> <p class='fs-4 text-muted lead'>" + fact["fact"] + "</p></div></div><br>");
          });
        },
        error: function ajaxError(jqXHR) {
          console.error("Error: ", jqXHR.responseText);
        },
      });
    }

  });
});
