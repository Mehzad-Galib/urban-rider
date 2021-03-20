import React, { useEffect,useState } from "react";
import Info from '../../MOCK_DATA.json';
import System from '../System/System';


const Home = () => {
  const [media, setMedia] = useState([]);
  useEffect(()=>{
    setMedia(Info)
  }, [])

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {
            media.map(way => <System way={way} key={way.id}></System>)
          }
          
        </div>
      </div>
    </>
  );
}
export default Home;