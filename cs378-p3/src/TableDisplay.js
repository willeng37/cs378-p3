import './weather_api';
import { useState, useEffect } from 'react';
import { fetchAPI } from './weather_api';

export default function TableDisplay({ city }) {
    // What should useState be set to? get a default api call value?
    const [curData, setCurData] = useState([]);
    useEffect(() => {
        async function runAPI() {
            const api_call = await fetchAPI(city);

            if (api_call['hourly']['temperature_2m'] === undefined) {
                console.log("error called in TableDisplay");
                return alert("API failed to load.");
            }

            // Convert into a table format
            const weatherData = api_call['hourly']['temperature_2m'];
            console.log("TableDisplay: " + weatherData);

            // Display the table
            const timeTable = ["12:00AM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5", "6", "7", "8", "9", "10", "11", "12"];
        }

        runAPI();
    }, [city]);

    return (
        <table>

        </table>
    );
}
