// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
      key:"a716994f712f2bd25ff7c79a93f625f1",
      baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}


//Event listener function on keypress
const searchInputBox=document.getElementById('input_box');

searchInputBox.addEventListener('keypress',(event)=>{

    //when we press enter//
    if(event.keyCode == 13)
        {
            console.log(searchInputBox.value);
            getweatherdata(searchInputBox.value);
            document.querySelector('.weather-info').style.display="block";
        }
});


// get weather data

function getweatherdata(city)
{
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then( showweatherdata);
}


//show weather data

function showweatherdata(weather)
{
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMax=document.getElementById('min-max');
    minMax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let currdate=new Date();
    date.innerText=dateManage(currdate);

    if(weatherType.textContent=='Clear')
        {
            document.body.style.backgroundImage="url('images/clear.jpg')";
        }
        else if(weatherType.textContent=='Clouds')
            {
                document.body.style.backgroundImage="url('images/cloudy.jpg')";
            }
         else if(weatherType.textContent=='Haze') 
            {
                document.body.style.backgroundImage="url('images/Haze.jpg')";
            }  
        else if(weatherType.textContent=='Rain')
            {
                document.body.style.backgroundImage="url('images/rainy.jpg')";
            }
        else if(weatherType.textContent=='Sunny')
            {
                document.body.style.backgroundImage="url('images/sunny.jpg')";
            } 
        else if(weatherType.textContent=='Thunderstorm')  
            {
                document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
            }     

}


//date manage function
function dateManage(currdate)
{
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=currdate.getFullYear();
    let month=months[currdate.getMonth()];
    let date=currdate.getDate();
    let day=days[currdate.getDay()];

    return `${date} ${month} (${day}) , ${year}`;

}



