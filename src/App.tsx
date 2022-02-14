import axios from 'axios';
import { useState, useEffect, Attributes } from 'react';
import { UNITS_URL, BASE_URL } from  './components/Api';
import './App.css';
import Heading from './components/Headings';



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + UNITS_URL)
      .then((respon) => {
        console.log(respon)
        setData(respon.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <>
      <Heading content="Thousand Sons Units"></Heading>
      <ul>
        {data.length > 0 ? data.map((unit : {attributes : {Name : string}}, idx) => 
            {
              return <li key={idx}>{unit.attributes.Name}</li>;
            })
          : "There are no units"}
      </ul>
    </>
  );
};

export default App;


