import React from "react";  // imports from react

function DestinationSelector({ tours, selected, onChange }) { // creates a function for the destination selector
  const uniqueDestinations = ["All", ...new Set(tours.map((tour) => tour.name))];  // gets all unique destinations

  return (  // returns
    <div className="destination-selector">   {/* sets class name for destination selector */}
      <label htmlFor="destination">Choose a destination: </label>  {/* creates a label for the selector*/}

      <select   /* Dropdown menu (controlled component) */
        id="destination"
        value={selected} // creates value as selected input
        onChange={(e) => onChange(e.target.value)} // Pass selected value to App.jsx
      >
        {/* Render dropdown options */}
        {uniqueDestinations.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;   // exports the DestinationSelector