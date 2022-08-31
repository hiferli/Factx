var key = config.API_KEY;
// var key = null;

$(document).ready(function () {

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $("#mode").prop("href" , "darkTheme.css");
    $('#flexSwitchCheckDefault').prop('checked', true);
  }
  
  if(localStorage.getItem("Theme") == "Light"){
    $("#mode").prop("href" , "lightTheme.css");
    $('#flexSwitchCheckDefault').prop('checked', false);
  } else if(localStorage.getItem("Theme") == "Dark"){
    $("#mode").prop("href" , "darkTheme.css");
    $('#flexSwitchCheckDefault').prop('checked', true);
  }

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
          $("#limit").hide();
          $(".facts").empty();
          $(".loading").show();  
          $(".error").hide();
        },
        
        success: function (result) {
          $("#limit").show();
          $(".loading").hide(); 
          // console.log("Done")
          $(".error").hide();
          
          result.forEach(fact => {
            // $(".facts").append("<p class='text-center'>" + fact["fact"] + "</p>");
            $(".facts").append("<div class='card text-center container shadow-sm p-3 bg-body rounded' style='width: 85%; margin-bottom: 5px'><div class='card-body'> <p class='fs-4 text-muted lead'>" + fact["fact"] + "</p></div></div><br>");
          });
        },

        error: function ajaxError(jqXHR) {
          jqXHR.abort();
          $(".loading").hide();  
          $(".error").show();
          console.error("Error: ", jqXHR.responseText);
          $("#repeat").click(function (e) {
            e.preventDefault();
            jqXHR.abort();
            ajaxCall();
            });
        },
      });
    }

  });
});

