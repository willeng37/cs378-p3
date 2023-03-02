import { useState, useRef, useCallback } from 'react';

const initialList = [ "Austin", "Dallas", "Houston" ];

export default function AppButtons({ setCity }) {
    // Handle input
    const newCityRef = useRef("");
    // Draws and maps the buttons onto the screen
    const [list, setList] = useState(initialList);
    // Callback on changing the city
    const handleCityChange = useCallback(e => {
        // console.log("handleCityChange called, to " + e.target.value);
        setCity(e.target.value);
    }, [setCity]);

    async function onAddButtonClick() {
        // Deals with adding a city when the button is pressed
        //let newCity = newCityRef.current.value;
        setList([
            ...list, newCityRef.current.value
        ]);
        setCity(newCityRef.current.value)
    }

    function CityButtons() {
        return (
            list.map((c) =>
                <button key={c} value={c} onClick={handleCityChange}>{c}</button>
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