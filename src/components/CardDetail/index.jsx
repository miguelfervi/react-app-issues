import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Button } from "antd";
import "./index.css";
import { AlertMessage } from "../AlertMessage";

export const CardDetail = () => {
  const [issue, setIssue] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios(`${process.env.REACT_APP_API_ADDRESS}/issues/${id}`)
        .then((result) => setIssue(result.data[0]))
        .catch((err) => {
          setError(err);
        });
    };

    fetchData();
  }, [id]);

  return issue ? (
    <div className="layout animate__animated animate__fadeIn">
      <div className="image-container">
        <img alt="issue" width="300" height="400" src={issue.cover_image} />
        <Button
          className="button-container"
          type="primary"
          onClick={() => navigate("/")}
        >
          Go back
        </Button>
      </div>
      <div className="info-container">
        <div>
          <h1>Name: </h1>
          <h2>{issue.name}</h2>
        </div>
        <div>
          <h1>ID: </h1>
          <h2>{issue.id}</h2>
        </div>
        <div>
          <h1>Description: </h1>
          <h2>{issue.description}</h2>
        </div>
      </div>
    </div>
  ) : !error ? (
    <div> Loading</div>
  ) : (
      <AlertMessage message="Error Text" description="Issue not found" type="error" />
  );
};
