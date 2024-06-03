const search = document.querySelector(".search-btn");

let BaseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const ApiKey = "&appid=16414a134279fddd6a2d4d8b4bd4afb0";

const container = document.querySelector(".weather-cont");

const error404 = document.querySelector(".not-found");

search.addEventListener("click", weatherFun);


window.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        weatherFun();

    }

})

function weatherFun() {

    let CityName = document.querySelector("input").value;

    if (CityName === "") {

        alert("ENTER CITY NAME");
        return;

    }
    else {

        fetch(BaseUrl + `&q=${CityName}` + ApiKey).then((res) => {

            res.json().then((json) => {

                if (json.cod === "404") {

                    container.style.height = "370px";
                    error404.classList.remove("opacity-0");
                    error404.classList.remove("d-none");
                    error404.classList.add("fade-animation");

                    if (search.classList.contains("fa-magnifying-glass")) {


                        search.classList.remove("fa-magnifying-glass");
                        search.classList.add("fa-x");
                        

                    }else{

                        document.querySelector("input").value = "";
                        search.classList.remove("fa-x");
                        search.classList.add("fa-magnifying-glass");
                    }

                } else {

                    error404.classList.add("opacity-0");
                    error404.classList.add("d-none");
                    error404.classList.remove("fade-animation");

                    const img = document.querySelector(".weather-box img");
                    const temp = document.querySelector(".temp span");
                    const desc = document.querySelector(".desc span");
                    const humidity = document.querySelectorAll(".info span")[0];
                    const wind = document.querySelectorAll(".info span")[1];
                    const weather_box = document.querySelector(".weather-box");
                    const weather_details = document.querySelector(".weather-details");

                    img.src = `/images/${json.weather[0].main}.png`;

                    weather_box.classList.remove("opacity-0");
                    weather_box.classList.add("fade-animation");
                    weather_details.classList.remove("opacity-0");
                    weather_details.classList.add("fade-animation");
                    temp.innerHTML = `${Math.round(json.main.temp)}°C`;
                    desc.innerHTML = `${json.weather[0].description}`;
                    humidity.innerHTML = `${json.main.humidity}%`;
                    wind.innerHTML = `${json.wind.speed}Km/h`;
                    container.style.height = "550px";


                    if (search.classList.contains("fa-magnifying-glass")) {


                        search.classList.remove("fa-magnifying-glass");
                        search.classList.add("fa-x");
                        

                    }else{

                        document.querySelector("input").value = "";
                        search.classList.remove("fa-x");
                        search.classList.add("fa-magnifying-glass");
                    }


                }

            }).catch((json_err) => {

                console.log(json_err);

            })

        }).catch((err) => {

            console.log(err);

        })

    }
}


