import axios from 'axios';
import { useState, useEffect, Attributes } from 'react';
import { UNITS_URL, BASE_URL } from  './components/Api';
import './App.css';
import Heading from './components/Headings';

interface UnitStats {
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
      <ul className='cardsContainer'>
        {data.length > 0 ? data.map((unit : UnitStats, idx) => 
            {
              return <li className='liCard' key={idx}><h3 className='unitName'>{unit.attributes.Name}</h3>
                                <div className='statsContainer'>  
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>M</p>
                                     <p className='statP'>{unit.attributes.Move}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>WS</p>
                                     <p className='statP'>{unit.attributes.WeaponSkill}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>BS</p>
                                     <p className='statP'>{unit.attributes.BallisticSkill}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>S</p>
                                     <p className='statP'>{unit.attributes.Strengt}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>T</p>
                                     <p className='statP'>{unit.attributes.Toughnes}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>W</p>
                                     <p className='statP'>{unit.attributes.Wounds}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>A</p>
                                     <p className='statP'>{unit.attributes.Attacks}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>Ld</p>
                                     <p className='statP'>{unit.attributes.Leadership}</p>
                                  </div>
                                  <div className='singleStatContainer'>
                                     <p className='statDescriptor'>Sv</p>
                                     <p className='statP'>{unit.attributes.Save}</p>
                                  </div>
                                </div>
                                <div className='unitCostContainer'>
                                  <p className='unitCostDescriptor'>Cost Per Model: </p>
                                  <p className='unitCostP'>{unit.attributes.CostPerModel}p</p>
                                </div>   
              </li>;
            })
          : "Warping in units"}
      </ul>
    </>
  );
};

export default App;


