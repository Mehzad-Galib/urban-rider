import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import Info from "../../MOCK_DATA.json";
import map from '../../images/Map.png';
import GoogleMapReact from 'google-map-react';

const Details = () => {
  
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();

  console.log(id);
  const product = Info.find((mode) => mode.id == id);
  const { Mode } = product;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Travel Details</h1>
      <div className="row mt-5">
        <div className="col d-flex">
          <div className="col-md-3">
            <h4>Name: {loggedInUser.name}</h4>
            <h5>Travel Vehicle: {Mode}</h5>
          </div>
          <div className="col-md-9">
            <h2>Map</h2>
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBFmd3YX-NLeqrcQEeCIFnU8fW4UNKzihk'}}
          
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
