import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <div>
      <Card
        onClick={props.onClick}
        className={`infoBox ${props.active && "infoBox__selected"} ${
          props.isRed && "infoBox__red"
        } `}
      >
        <CardContent>
          <Typography color="textSecondary" className="infoBox__title">
            {title}
          </Typography>
          <h2
            className={`infoBox__cases ${
              !props.isRed && "infoBox__cases__green"
            } `}
          >
            {cases}
          </h2>
          <Typography color="textSecondary" className="infoBox__total">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
