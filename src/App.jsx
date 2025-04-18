import { useEffect, useState } from "react"; // imports the use state from react
import Gallery from "./Gallery"; // import Gallery.jsx
import DestinationSelector from "./DestinationSelector";  // import DestinationSelector.jsx
import "./App.css"; // import styling

const API_URL = "https://course-api.com/react-tours-project";  // creates const for the api url

function App() {  // creates function for the app
  const [tours, setTours] = useState([]);   // uses useState for holding tours
  const [loading, setLoading] = useState(true);  // uses useState for loading data
  const [error, setError] = useState(null);  // uses useState for error
  const [selectedDestination, setSelectedDestination] = useState("All");  // uses useState for storing selected option

  const fetchTours = async () => {  // const fetchTours
    setLoading(true);  // set loading to true
    setError(null);  // set error to null
    try {
      const res = await fetch(API_URL);  // fetch the url
      if (!res.ok) throw new Error("Failed to fetch tours."); // if response is not ok, throw error code
      const data = await res.json();  // parse the data
      setTours(data); // set the tour data
    } catch (err) { // catch errors
      setError(err.message);  // if error, show error message
    } finally {
      setLoading(false);  // set loading to false after everything
    }
  };
  
  useEffect(() => {
    fetchTours(); // runs the fetchTours function
  }, []);

  return (  // returns
    <main className="App">    {/* container for the info */}
      <h1>Tour Explorer</h1>    {/* App title */}

      {tours.length > 0 && (  // if >0 tours
        <DestinationSelector
          tours={tours} // Full tour list
          selected={selectedDestination} // Currently selected tour
          onChange={setSelectedDestination} // updated selected tour
        />
      )}

      {tours.length === 0 && !loading && !error && ( // if no more tours and no error
        <div className="no-tours"> {/* no button for more tours */}
          <p>No tours left. Refresh to reload.</p> {/* no more tours message */}
          <button onClick={fetchTours}>Refresh</button> {/* refresh the button when refresh */}
        </div>
      )}

      {/* displays the filtered tours */}
      
      {(tours.length > 0 || loading || error) && (

      <Gallery   
        tours={tours} // tour list
        loading={loading} // loading state
        error={error}  // error state
        selected={selectedDestination}  // selected tour
        setTours={setTours}  // set tours function
      />
      )}

      </main>
      
  );
}

export default App;  // exports the app
