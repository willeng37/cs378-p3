let weather_api = "https://api.open-meteo.com/v1/forecast";
let geo_api = "https://geocoding-api.open-meteo.com/v1/search";
let test_api = "https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&hourly=temperature_2m&temperature_unit=fahrenheit";

export async function fetchWeatherAPI(params) {
    try {
        const response = await fetch(test_api);
        const json = await response.json();
        console.log("API call: " + params);
        console.log(json);
        console.log("END fetchAPI");
        return json;
    }
    catch (err) {
        // Error: could not reach API
        return (
            <p>
                Error: fetchAPI failed.
            </p>
        );
    }
}

export async function fetchGeoAPI(cityName) {
    try {
        const response = await fetch(geo_api + "&name=" + cityName);
        const json = await response.json();
        console.log("Geo API call: " + cityName);
        console.log(json);
        console.log("END fetchGeoAPI");
        return json;
    }
    catch (err) {
        // Error: could not reach API
        return (
            <p>
                Error: fetchGeoAPI failed.
            </p>
        );
    }
}

export async function fetchAPI(params) {
    // const geo_val = fetchGeoAPI(params);
    return await fetchWeatherAPI(null);
}