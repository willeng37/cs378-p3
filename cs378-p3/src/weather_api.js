let weather_api = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&temperature_unit=fahrenheit";
let geo_api = "https://geocoding-api.open-meteo.com/v1/search";

export async function fetchWeatherAPI(params) {
    try {
        const lat = "&latitude=" + params.latitude;
        const lon = "&longitude=" + params.longitude;
        const response = await fetch(weather_api + lat + lon);
        const json = await response.json();
        // console.log("API call: " + params.longitude);
        // console.log(json);
        // console.log("END fetchAPI");
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
        const response = await fetch(geo_api + "?name=" + cityName);
        const json = await response.json();
        // console.log("Geo API call: " + cityName);
        // console.log(json);
        // console.log("END fetchGeoAPI");
        return json;
    }
    catch (err) {
        // Error: could not reach API
        return (
                alert("Error: Could not find city.")
        );
    }
}

export async function fetchAPI(city) {
    const geo_val = await fetchGeoAPI(city);
    if (geo_val['results'] === undefined) {
        return(alert("Error: could not find city."));
    }
    const location = {
        latitude: geo_val['results'][0]['latitude'],
        longitude: geo_val['results'][0]['longitude']
    }
    return await fetchWeatherAPI(location);
}