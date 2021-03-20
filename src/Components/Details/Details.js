import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import Info from "../../MOCK_DATA.json";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faUsers } from "@fortawesome/free-solid-svg-icons";
const travelInfo = [
  {option: 1, person: 4, fare: 100},
  {option: 2, person: 2, fare: 60},
  {option: 3, person: 1, fare: 40}
]

const Details = () => { 
  const [destination, setDestination] = useState({});

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>{
    setDestination(data);

  } 

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const product = Info.find((mode) => mode.id == id);
  const { Mode, image } = product;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Traveller: {loggedInUser.name}</h1>
      <div className="row mt-5">
        <div className="col d-flex">
          <div className="col-md-3">
            <h3>Travel Details</h3>
            <h4>Travel Vehicle: {Mode}</h4>

            <form onSubmit={handleSubmit(onSubmit)}>

              <h5>Pick From</h5>

              <input name="from" placeholder='From Where' ref={register} />

              <h5>Pick To</h5>

              <input name="to" placeholder='to Where'
                ref={register({ required: true })}/>

              {errors.exampleRequired && <span>This field is required</span>}
              
              <input type="submit" placeholder='Search' />

            </form>
            <h6>From: {destination.from}</h6>
            <h6>To: {destination.to}</h6>
            
            {
              destination.to && destination.from ? (
                <div>
            <Card><img style={{height: '40px', width: '45px'}} src={image} alt=''></img> Mode: {Mode} Person: {travelInfo[0].person} Fare: ${travelInfo[0].fare}</Card> 

            <Card><img style={{height: '40px', width: '45px'}} src={image} alt=''></img> Mode: {Mode} Person: {travelInfo[1].person} Fare ${travelInfo[1].fare}</Card> 

            <Card><img style={{height: '40px', width: '45px'}} src={image} alt=''></img> Mode: {Mode} Person: {travelInfo[2].person} Fare: ${travelInfo[2].fare}</Card> 
            
                </div>
              ) : null
            }
            
          </div>
          <div className="col-md-9">
            <h2>Map</h2>
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBFmd3YX-NLeqrcQEeCIFnU8fW4UNKzihk",
                }}
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
