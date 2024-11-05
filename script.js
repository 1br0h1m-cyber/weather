
function Weather(){

    const CityName = document.querySelector('input').value
    const KeyApi = '3b868c7091311cac089ed03f5b523352'

    const City = document.querySelector('.name')
    const Time = document.querySelector('.time')
    const Icon = document.querySelector('.icon')
    const Cond = document.querySelector('.cond')
    const Degree = document.querySelector('.degree')
    const MinDeg = document.querySelector('.min')
    const MaxDeg = document.querySelector('.max')


    if(CityName.trim().length !== 0){

        try{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${KeyApi}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then((wdata)=>{

                let date = new Date('2024-11-02'); 
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                
                let day = days[date.getDay()];
                let month = months[date.getMonth()];
                let dayOfMonth = date.getDate();
                
                let FullDate = `${day}, ${month} ${dayOfMonth}, ${date.getFullYear()}`;

    
                Time.innerHTML = FullDate
                City.innerHTML = wdata.name
                Cond.innerHTML = wdata.weather[0].main
                Degree.innerHTML = `${(wdata.main.temp - 273).toFixed(1)}°C`
                MinDeg.innerHTML = `${(wdata.main.temp_min - 273).toFixed(1)}°C`
                MaxDeg.innerHTML = `${(wdata.main.temp_max - 273).toFixed(1)}°C`
            
                if(wdata.weather[0].main === 'Clouds'){
                    Icon.innerHTML = '☁️'
                }
                else if(wdata.weather[0].main === 'Rain'){
                    Icon.innerHTML = '🌧️'
                }
                else if(wdata.weather[0].main === 'Clear'){
                    Icon.innerHTML = '☀️'
                }
                else if(wdata.weather[0].main === 'Snow'){
                    Icon.innerHTML = '❄️'
                }
                else if(wdata.weather[0].main === 'Mist'){
                    Icon.innerHTML = '🌫️'
                }

            })
        }
        
        catch (error) {
            console.error(error);
        }
    
    }
    
}

