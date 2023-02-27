let weather_api = "https://api.open-meteo.com/v1/forecast";
let test_api = "https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&hourly=temperature_2m";

export async function fetchAPI(params) {
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