const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const middle_layer = document.querySelector('.middle_layer');
const day = document.getElementById('day');
const time = document.getElementById('time');
const today_data = document.getElementById('today_data');



const getInfo = async(event) =>{

 
    event.preventDefault();
    let cityVal = cityName.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=19fccb25bff59cc0def2c6a584e1037e`;
    
    if(cityVal ===''){
        city_name.innerText = `Plz write your city name before search`;
    }else{
        try{
            const response = await (await fetch(url)).json();
            const arrData = [response];
            middle_layer.classList.remove('data_hide');
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerHTML = `<img src="icons/${arrData[0].weather[0].icon}.png" alt="" srcset=""></img>`;




            console.log(arrData);
        }catch(error){
            city_name.innerText = `Plz write your city name properly`;
            middle_layer.classList.add('data_hide');

        }
        
    }
}

submitBtn.addEventListener('click', getInfo);


// show day 

var today = new Date();
  var newday = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  
  day.innerText = daylist[newday]
  console.log("Today is : " + daylist[newday] + ".");

  


//  setTimeout(myshowTime(), 1000);

 function startTime() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
  }

  // show month and date


  
     const date = today.toLocaleString('default', { day: 'numeric'});

     const month = today.toLocaleString('default', { month: 'short'});
   console.log(month);

   today_data.innerText =date + " " + month;


