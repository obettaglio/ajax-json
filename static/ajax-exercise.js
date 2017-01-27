"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div

    $.get("/fortune", function(result) {$("#fortune-text").html(result);})
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log(url);
    console.log($("#zipcode-field").val());

    if ($("#zipcode-field").val().length == 5) {
       $.get(url, function(result) {$("#weather-info").html(result.forecast);});
    } else {
        $("#weather-info").html("That was not a valid zipcode.");
    }
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showMelonOrderSuccess(result) {
    console.log(result);
    if (result.result_code == "ERROR") {
        $("#order-status").addClass("order-error");
    }
    alert(result.msg); 
}


function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json",
           formInputs,
           showMelonOrderSuccess
           );
}

$("#order-form").on('submit', orderMelons);


