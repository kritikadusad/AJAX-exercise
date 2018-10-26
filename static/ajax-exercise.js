"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
	evt.preventDefault();

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (fortune_data)=>{
    	const fortune = fortune_data;
    	$("#fortune-text").html(fortune);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
// TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, (results)=>{
    	//console.log(results);
    	const zipcode_forecast = results.forecast;
    	$("#weather-info").html(zipcode_forecast)

    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
	let url = "/order-melons.json";
    let data = {"melon_type": $("#melon-type-field").val(), "qty": $("#qty-field").val()};
    // TODO: show the result message after your form
    $.post(url, data, (results)=>{
    	//console.log(results);
    	const order_status_msg = results.msg;
    	$("#order-status").html(order_status_msg);
    	if (results.code === 'ERROR') {
    		$("#order-status").addClass("order-error");}
    });
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


