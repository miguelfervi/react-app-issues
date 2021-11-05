import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const CardDetail = () => {
  const [issue, setIssue] = useState();

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

  return <div>{issue && issue.name}</div>;
};
