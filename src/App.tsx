import axios from 'axios';
import { useState, useEffect } from 'react';
import { UNITS_URL, BASE_URL} from  './components/Api';
import './App.css';
import Heading from './components/Headings';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + UNITS_URL)
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <Heading content="RUBRIC MARINES"></Heading>
      <ul>
        {data.length > 0
          ? data.map((unit, idx) => {
              return <li key={idx}>{unit}</li>;
            })
          : null}
      </ul>
    </>
  );
};

export default App;






// function App() {
//   return (
//     <div className="App">
//       <Heading content="RUBRIC MARINES"></Heading>
//     </div>
//   );
// }

// export default App;

