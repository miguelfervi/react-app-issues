import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { Button } from 'antd';


export const CardDetail = () => {
  const [issue, setIssue] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_ADDRESS}/issues/${id}`
      );
      setIssue(result.data[0]);
    };

    fetchData();
  }, [id]);

  return issue ? (
    <div>
      <div>{issue.name}</div>
      <div>{issue.cover_image}</div>
      <div>{issue.id}</div>
      <div>{issue.description}</div>
      <Button type="primary" onClick={() => navigate('/')}>Go back</Button>
    </div>
  ) : (
    <div> Loading</div>
  );
};
