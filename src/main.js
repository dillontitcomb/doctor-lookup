import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     $('.showErrors').hide();
//     let city = $('#location').val();
//     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.exports.apiKey`).then(function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     }).fail(function(error) {
//       $('.showHumidity').hide();
//       $('.showTemp').hide();
//       $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//       $('.showErrors').show();
//     });
//   });
