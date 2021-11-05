import React from "react";
import { Alert, Button } from "antd";

import { useNavigate } from "react-router";

export const AlertMessage = ({ message, description, type, button = true }) => {
  const navigate = useNavigate();
  return (
    <div className={`${type} alert`}>
      <Alert message={message} description={description} type={type} />
      {button && <Button onClick={() => navigate("/")}>Go back</Button>}
    </div>
  );
};
