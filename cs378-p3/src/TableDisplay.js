import './weather_api';
import { fetchAPI } from './weather_api';

export default function TableDisplay() {
    // Call the API to get data from the table
    const api_call = fetchAPI(null);

    // Convert into a table format

    // Display the table

    return null;
}
