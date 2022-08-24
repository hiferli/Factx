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
        success: function (result) {
          $(".facts").empty();

          result.forEach(fact => {
            $(".facts").append("<p class='text-center'>" + fact["fact"] + "</p>");
          });
        },
        error: function ajaxError(jqXHR) {
          console.error("Error: ", jqXHR.responseText);
        },
      });
    }

  });
});
