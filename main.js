$(document).ready(function() {
    $('#search').click(function() {
        var query = $('#cityname').val();

        if (query != 0) {

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=9057aa5da986517ba63b41496c449989", function() {

            }).done(function(result) {

                var cityName = result.name;
                var countryName = result.sys.country;
                var currentTemp = result.main.temp - 273.15;
                var description = result.weather[0].description;
                $(".list").append('<li> -' + '<span>' + cityName + '</span>' + ', ' + '<span>' + countryName + '</span>' + ': ' + currentTemp.toFixed(1) + '&deg C, ' + description + '</li>')
                $('#cityname').val('');
            }).fail(function() {
                alert('Fail intput');
            });
        } else {
            alert('Enter city name');
        }
    });
    $('#clear').click(function () {
      $('.list').empty();
    })


});
