const Api =`43c1430249cde1d2c7d8e1ae80b480e7`
const SrcTem =() =>{
    const city = document.getElementById('city-name').value;         //search city from api
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric`;
    console.log(url);
    fetch(url)
    .then (res => res.json())
    .then(data =>display(data));
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText=text;
}
const display = tem =>{
    setInnerText('city', tem.name);
    setInnerText('temp',tem.main.temp);
    setInnerText('clouds',tem.weather[0].main);
    const url =`http://openweathermap.org/img/wn/${tem.weather[0].icon}@2x.png`
    const icon =document.getElementById('wether-icon');
    icon.setAttribute('src',url);
 
}