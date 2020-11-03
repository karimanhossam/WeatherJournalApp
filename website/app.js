/* Global Variables */
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=120b23c2ee4e14313b56a5f17616d19d";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Async get
const getData = async (baseURL, zipCode, key) => {
  const res = await fetch(baseURL + zipCode + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

//Async post
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", eventListener);

function eventListener() {
  let zipCode = document.getElementById("zip").value;
  let userData = document.getElementById("feelings").value;

  getData(baseURL, zipCode, apiKey).then(function (data) {
    postData("/postData", {
      temp: data.main.temp,
      date: newDate,
      userData: userData,
    });
  });
}
