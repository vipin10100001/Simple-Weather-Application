API_KEY='ENTER_YOUR_API_KEY_HERE';

const form=document.querySelector('form');
const search=document.querySelector('#search');
const weather=document.querySelector('#weather');

const getWeather=async(city)=>{
    const
 url = 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
 
    const response=await fetch(url);
    const data=await response.json();
   return  showWeather(data);
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}


form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();

    } ) 
