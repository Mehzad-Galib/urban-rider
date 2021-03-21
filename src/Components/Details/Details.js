import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import Info from "../../MOCK_DATA.json";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import Map from "../Map/Map";
const travelInfo = [
  { option: 1, person: 4, fare: 100 },
  { option: 2, person: 2, fare: 60 },
  { option: 3, person: 1, fare: 40 },
];

const Details = () => {
  const [value, onChange] = useState(new Date());
  const [destination, setDestination] = useState({});

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setDestination(data);
    console.log(data);
  };

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
          <div className="col-md-4 col-sm-12">
            <h3>Travel Details</h3>
            <h4>Travel Vehicle: {Mode}</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>Pick From</h5>
              <input name="from" placeholder="From Where" ref={register} />
              <h5>Pick To</h5>
              <input
                name="to"
                placeholder="to Where"
                ref={register({ required: true })}
              />{" "}
              <br />
              <h5>Journey Date</h5>
              <DateTimePicker onChange={onChange} name='date' value={value} /><br/>
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" placeholder="Search" />
            </form>

            {destination.to && destination.from ? (
              <div>
                <h6>From: {destination.from}</h6>
                <h6>To: {destination.to}</h6>
                <Card>
                  <img
                    style={{ height: "40px", width: "45px" }}
                    src={image}
                    alt=""
                  ></img>{" "}
                  Mode: {Mode}; Person: {travelInfo[0].person}; Fare: $
                  {travelInfo[0].fare}
                </Card>

                <Card>
                  <img
                    style={{ height: "40px", width: "45px" }}
                    src={image}
                    alt=""
                  ></img>{" "}
                  Mode: {Mode}; Person: {travelInfo[1].person}; Fare $
                  {travelInfo[1].fare}
                </Card>

                <Card>
                  <img
                    style={{ height: "40px", width: "45px" }}
                    src={image}
                    alt=""
                  ></img>{" "}
                  Mode: {Mode}; Person: {travelInfo[2].person}; Fare: $
                  {travelInfo[2].fare}
                </Card>
              </div>
            ) : null}
          </div>
          <div className="col-md-8 col-sm-12">
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
