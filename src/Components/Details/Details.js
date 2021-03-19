import React from 'react';
import { useParams } from "react-router-dom";
import { useContext, useState,useEffect } from 'react';
import { UserContext } from '../../App';

const Details = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <h3>THis is details</h3>
            <h4>Name: {loggedInUser.name}</h4>
        </div>
    );
};

export default Details;