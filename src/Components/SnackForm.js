import React, { useState } from "react";
import game_schedule from "../Data/schedule-game.json";
import { formatDate } from "./dateUtils";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../CSS/SnackForm.css";

const SnackForm = () => {
  // custom function to sory the json by date
  function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
  }

  game_schedule.sort(custom_sort);

  return (
    <div className="snack-page-container">
      <Form className="form-container">
        {game_schedule.map((item) => (
          <div className="snack-date-container">
            <Form.Group className="mb-3">
              <Form.Label>Game Date: {formatDate(item.Date)}</Form.Label>
              <Form.Control type="input" placeholder="Enter Name" />
            </Form.Group>
            <Button variant="primary" type="button" id="form-button">
              Submit
            </Button>

            <p className="signed-up-person">placeholder</p>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default SnackForm;
