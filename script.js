

window.onload=function() {
    var text=document.querySelector('#textbox');
var icon=document.querySelector('#image');
var temp=document.querySelector('.temp');
var description=document.querySelector('.description');
var hum_per=document.querySelector('#h-perc');
var wind_per=document.querySelector('#w-perc');
const button=document.querySelector('#button');


    button.addEventListener('click',()=>{
        checkweather(text.value);
    });
  
async function checkweather(city){
    var city=text.value;
    const api_key="1248283522f3e97216a8bd28797ee85f";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data=await fetch(`${url}`).then(response =>response.json());
    console.log(data);
    var temperature=Math.round(data.main.temp-273.15);
    temp.innerHTML=temperature+"°C";
    description.innerHTML=data.weather[0].main;
    hum_per.innerHTML=data.main.humidity+"%";
    wind_per.innerHTML=data.wind.speed+"Km/H";

    if(data.weather[0].main=="clear"){
        document.getElementById("image").src="D:///Program/Web Devlopment/Weather_API/New folder/sunny.png";
    }
    else if(description=="clouds"){
        icon.src="/New folder/cloudy.png";
    }
    
}

}

