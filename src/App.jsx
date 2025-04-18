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

  useEffect(() => { // arrow function for useEffect
    const fetchTours = async () => {  // creates constant for fetching the tour
      setLoading(true);  // changes loading to being true
      setError(null);  // setting to no error
      try {
        const res = await fetch(API_URL); // fetches the url from the api url const
        if (!res.ok) throw new Error("Failed to fetch tours."); // if response is not ok, state error message
        const data = await res.json();  // parse response
        setTours(data);  // saves tours
      } catch (err) {  // catches error
        setError(err.message); // log error message
      } finally {
        setLoading(false);  // after everything, set loading to false
      }
    };

    fetchTours();  // runs fetchTours function
  }, []);

  return (  // returns
    <main className="App">    {/* container for the info */}
      <h1>Tour Explorer</h1>    {/* App title */}
      <DestinationSelector
        tours={tours}   {/* add tours in here */}
        selected={selectedDestination}    {/* add selected destination in here */}
        onChange={setSelectedDestination}    {/* if selected destination changes, change result */}
      />
      <Gallery   {/* displays the filtered tours */}
        tours={tours}
        loading={loading}
        error={error}
        selected={selectedDestination}
        setTours={setTours}
      />
    </main>
  );
}

export default App;  // exports the app
