import axios from 'axios';
import { useState, useEffect, Attributes } from 'react';
import { UNITS_URL, BASE_URL } from  './components/Api';
import './App.css';
import Heading from './components/Headings';

interface UnitState {
  attributes: {
    Name : string,
    Move : string, 
    WeaponSkill : string,
    BallisticSkill : string,
    Strengt : string,
    Toughnes : string, 
    Attacks : string,
    Wounds : string,
    Leadership : string,
    Save : string,
    CostPerModel : number
  }
}

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
        {data.length > 0 ? data.map((unit : UnitState, idx) => 
            {
              return <li className='liCard' key={idx}><h3 className='unitName'>{unit.attributes.Name}</h3>
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


