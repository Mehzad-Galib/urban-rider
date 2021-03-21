import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const System = (props) => {
    const {Mode, image, id} = props.way;
    return (
        <div className="col-md-3 col-sm-6">
            <Card>
              <Button variant="outline-dark" as={Link} to={`/details/${id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="190"
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {Mode}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Button>
              
            </Card>
        </div>
    );
};

export default System;