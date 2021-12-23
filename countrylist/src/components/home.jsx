import React, { useState, useEffect } from 'react';
import { userInstance } from "../config/axios";

function Home() {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [continent, setContinent] = useState("");
  const [flag, setFlag] = useState("");
  const [rank, setRank] = useState("");
  useEffect(() => {
    (async () => {
        const getData = await userInstance.get("/countries");
        setData(getData.data.countries)
      })()
  },[]);

  const handleClick =async(e) =>{
    e.preventDefault()
    const payload={
        name:countryName,
        continent:continent,
        flag:flag,
        rank:rank
    }
    const saveData = await userInstance.post("/country",payload);
    console.log(saveData)
  }
  return (
    <div>
         <div>
              <div><input type="text" placeholder='countryName' onChange={(e)=>setCountryName(e.target.value)}/></div>
              <div><input type="text" placeholder='continent'onChange={(e)=>setContinent(e.target.value)}/></div>
              <div><input type="text" placeholder='Flag' onChange={(e)=>setFlag(e.target.value)}/></div>
              <div><input type="text" placeholder='Rank' onChange={(e)=>setRank(e.target.value)}/></div>
              <div><button onClick={handleClick}>Save Country</button></div>
          </div>
        <select placeholder='select'>
         {data.map((item) => (
            <option key={item._id} defaultValue={"Select"}>{item.name}</option>
          ))}
          </select>
    </div>
  );
}
export default Home