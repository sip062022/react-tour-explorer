import React from "react";  // import from react

function TourCard({ tour, setTours }) { // function for tourcard
  const handleRemove = () => { // handle removing a tour
    setTours((prevTours) => prevTours.filter((t) => t.id !== tour.id)); // filter out tours
  };

  return (
    <div className="tour-card">  {/* set class name as tour-card */} 
      
      <img src={tour.image} alt={tour.name} /> {/* Display tour details: name, info, image, and price */}
      <h2>{tour.name}</h2> {/* Name of tour */}
      <p>{tour.info}</p> {/* tour info */}
      <p><strong>${tour.price}</strong></p> {/* Tour price */}

      <button onClick={handleRemove}>Not Interested</button>  {/* "Not Interested" button */}
    </div> 
  );
}

export default TourCard; // export tourcard