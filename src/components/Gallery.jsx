import React from "react";  // import from reach
import TourCard from "./TourCard";  // import from the tourcard



function Gallery({ tours, loading, error, selected, setTours }) {  // creates function for the gallery
  const filteredTours = selected === "All" ? tours : tours.filter((tour) => tour.name === selected);  // show filtered tours

  if (loading) {  // if loading
    return <p>Loading...</p>; // show loading message
  }

  if (error) { // if error during loading
    return <p>Error: {error}</p>;  // show error message
  }

  if (filteredTours.length === 0) {  // if no more tours
    return <p>No tours available.</p>;  // show message for no more tours available
  }

  return (
    <div className="gallery">  {/* sets className as gallery */}
      {filteredTours.map((tour) => ( /* for each tour */
        <TourCard
          key={tour.id} // tour id
          tour={tour} // Pass tour data
          setTours={setTours} // pass set tours
        />
      ))}
    </div>
  );
}

export default Gallery; // export gallery 