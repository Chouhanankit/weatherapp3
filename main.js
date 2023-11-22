const button = document.querySelector("#submit");
const input = document.querySelector("input");

const options = {

    method: 'GET', headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }

};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            console.log(response)


        })
        .catch(err => console.log(err));
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("New Delhi");




const getWeather2 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
        .then(response => response.json())
        .then(response => {

            feels_like_mumbai.innerHTML = response.feels_like
            humidity_mumbai.innerHTML = response.humidity
            max_temp_mumbai.innerHTML = response.max_temp
            min_temp_mumbai.innerHTML = response.min_temp
            sunset_mumbai.innerHTML = response.sunset
            temp_mumbai.innerHTML = response.temp
            wind_speed_mumbai.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err));
}
getWeather2();


const getWeather3 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then(response => {

            feels_like_kolkata.innerHTML = response.feels_like
            humidity_kolkata.innerHTML = response.humidity
            max_temp_kolkata.innerHTML = response.max_temp
            min_temp_kolkata.innerHTML = response.min_temp
            sunset_kolkata.innerHTML = response.sunset
            temp_kolkata.innerHTML = response.temp
            wind_speed_kolkata.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err));
}
getWeather3();

const getWeather4 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal', options)
        .then(response => response.json())
        .then(response => {

            feels_like_bhopal.innerHTML = response.feels_like
            humidity_bhopal.innerHTML = response.humidity
            max_temp_bhopal.innerHTML = response.max_temp
            min_temp_bhopal.innerHTML = response.min_temp
            sunset_bhopal.innerHTML = response.sunset
            temp_bhopal.innerHTML = response.temp
            wind_speed_bhopal.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err));
}
getWeather4();

const getWeather5 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris', options)
        .then(response => response.json())
        .then(response => {

            feels_like_paris.innerHTML = response.feels_like
            humidity_paris.innerHTML = response.humidity
            max_temp_paris.innerHTML = response.max_temp
            min_temp_paris.innerHTML = response.min_temp
            sunset_paris.innerHTML = response.sunset
            temp_paris.innerHTML = response.temp
            wind_speed_paris.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err));
}
getWeather5();

const getWeather6 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
        .then(response => response.json())
        .then(response => {

            feels_like_newyork.innerHTML = response.feels_like
            humidity_newyork.innerHTML = response.humidity
            max_temp_newyork.innerHTML = response.max_temp
            min_temp_newyork.innerHTML = response.min_temp
            sunset_newyork.innerHTML = response.sunset
            temp_newyork.innerHTML = response.temp
            wind_speed_newyork.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err));
}
getWeather6();