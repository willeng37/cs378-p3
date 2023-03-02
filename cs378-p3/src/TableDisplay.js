import './TableDisplay.css'
import './weather_api';
import { useState, useEffect } from 'react';
import { fetchAPI } from './weather_api';

export default function TableDisplay({ city }) {
    // Empty weather app data table
    const [curData, setCurData] = useState([]);

    useEffect(() => {
        async function runAPI() {
            const api_call = await fetchAPI(city);

            if (api_call['hourly']['temperature_2m'] === undefined) {
                //console.log("error called in TableDisplay");
                return alert("API failed to load.");
            }

            // Convert into a table format
            const weatherData = api_call['hourly']['temperature_2m'];
            const timeData = api_call['hourly']['time'];
            //console.log("weatherData: " + weatherData);
            //console.log("timeData: " + weatherData);

            // Display the table
            let combinedData = [];
            for (let i = 0; i < 16; i++) {
                const curDate = new Date(timeData[i]);
                combinedData.push({
                    date: curDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit"}),
                    temp: weatherData[i] + "°F"
                })
            }

            setCurData(combinedData);
        }

        runAPI();
    }, [city]);

    return (
        <table>
            <tbody>
                {curData.map((data, index) => 
                    <tr key={index}>
                        <td key={data.date}>{data.date}</td>
                        <td key={data.temp}>{data.temp}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
