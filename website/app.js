/* Global Variables */
let baseURL = "api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=120b23c2ee4e14313b56a5f17616d19d";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

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
