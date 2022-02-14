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
        {data.length > 0 ? data.map((unit : {attributes : {Name : string,
                                                           Move : string, 
                                                           WeaponSkill : string,
                                                           BallisticSkill : string,
                                                           Strengt : string,
                                                           Toughnes : string, 
                                                           Attacks : string,
                                                           Wounds : string,
                                                           Leadership : string,
                                                           Save : string,
                                                           CostPerModel : string
                                                          }}, idx) => 
            {
              return <li key={idx}><div className='unitName'>{unit.attributes.Name}</div>
                                   <div>{unit.attributes.Move}</div>
                                   <div>{unit.attributes.WeaponSkill}</div>
                                   <div>{unit.attributes.BallisticSkill}</div> 
                                   <div>{unit.attributes.Strengt}</div>
                                   <div>{unit.attributes.Toughnes}</div>
                                   <div>{unit.attributes.Attacks}</div>
                                   <div>{unit.attributes.Wounds}</div>
                                   <div>{unit.attributes.Leadership}</div>
                                   <div>{unit.attributes.Save}</div>
                                   <div>{unit.attributes.CostPerModel}</div>
              </li>;
            })
          : "There are no units"}
      </ul>
    </>
  );
};

export default App;


