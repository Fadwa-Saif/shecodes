//function display the actual date 
function time() {
      let now= new Date();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]; // creating an array for all week days to access it(days) by index
      let day = days[now.getDay()];
      let hours= now.getHours();
      let minutes= now.getMinutes();

      let currentDateELement = document.getElementById("current-date");
      currentDateELement.innerHTML = `${day},${hours}:${minutes}`;
}
time();//displays time once uploading the page

//function to display the temperature of searched city
function DisplayTemperature(){
      event.preventDefault();
  //select the input of user
  let city = document.querySelector(".search-inpt").value.trim();;
  let apiKey = "4fo06t62bf3380c33aa375d8a094089a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(function(response) {

  let temperature = Math.round(response.data.temperature.current);

  //repace the elements by real time data
  let h1 = document.querySelector("h1");
  let temp = document.querySelector(".degree");
  h1.innerHTML = city;
  temp.innerHTML = temperature;

  });
}
let submitButton = document.querySelector(".submit-inpt");
submitButton, addEventListener("submit", DisplayTemperature);
