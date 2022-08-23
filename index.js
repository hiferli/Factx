var key = config.API_KEY;

function updateLimit(limit){
    document.getElementById("limitNumber").innerText = limit;
}

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + 3,
    headers: { 'X-Api-Key': key},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});