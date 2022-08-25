var key = config.API_KEY;
// var key = null;

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
  $(".error").hide();
  
  $("#limit").on("change" , function ajaxCall () {
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
          $(".error").hide();
        },
        
        success: function (result) {
          $(".loading").hide(); 
          // console.log("Done")
          $(".error").hide();
          
          result.forEach(fact => {
            // $(".facts").append("<p class='text-center'>" + fact["fact"] + "</p>");
            $(".facts").append("<div class='card text-center container shadow-sm p-3 mb-5 bg-body rounded' style='width: 50rem'><div class='card-body'> <p class='fs-4 text-muted lead'>" + fact["fact"] + "</p></div></div><br>");
          });
        },

        error: function ajaxError(jqXHR) {
          jqXHR.abort();
          $(".loading").hide();  
          $(".error").show();
          console.error("Error: ", jqXHR.responseText);
          $("#repeat").click(function (e) {
            e.preventDefault();
            ajaxCall();
            });
        },
      });
    }

  });
});
