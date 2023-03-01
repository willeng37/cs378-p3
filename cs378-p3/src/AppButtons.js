import { useState, useRef } from 'react';

const initialList = [ "Austin", "Dallas", "Houston" ];

export default function AppButtons() {
    // Handle input
    const newCityRef = useRef("");
    // Draws and maps the buttons onto the screen
    const [list, setList] = useState(initialList);
    const [city, setCity] = useState("Austin");

    function onAddButtonClick(e) {
        // Deals with adding a city when the button is pressed
        setList([
            ...list, newCityRef.current.value
        ]);
    }

    function setCityButton(e) {
        setCity(e.target.key);
    }

    function CityButtons() {
        return (
            list.map((city) =>
                <button key={city} onClick={setCityButton}>{city}</button>
            )
        );
    }

    // CityFormInput container with the form input and where to update
    function CityFormInput() {
        return (
            <form className="city_form">
                <input type="text" ref={newCityRef}></input>
                <button onClick={onAddButtonClick}>+</button>
            </form>
        );
    }
    
    // Should return a mapping of the buttons
    // Followed by the form input with an additional add button
    return (
        <div>
            <CityButtons />
            <CityFormInput />
        </div>
    );
}