import './weather_api';
import { useState } from 'react';
import { fetchAPI } from './weather_api';

export default function TableDisplay({ city }) {
    // What should useState be set to? get a default api call value?
    const [curData, setCurData] = useState([]);

    // Call the API to get data from the table
    const api_call = fetchAPI(city);

    // Convert into a table format

    // Display the table

    return (
        <table>

        </table>
    );
}
