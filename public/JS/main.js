// Foursquare API Info
const clientId = 'DSJUZOOV20KM0VBXLO2GUNLOA1PYX0T3UVJW3EINW0DUTKOI';
const clientSecret = 'CJUVGKKS4UXANC4PUSBXSOOWHW4YVLHGQ0AQQ3TYERA5OUCX';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '838c7a693b58a464bbeeee4603300656';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

