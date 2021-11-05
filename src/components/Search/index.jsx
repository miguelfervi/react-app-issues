import React from "react";
import { Input, Space } from "antd";
import "./index.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="search-box">
    <Space direction="vertical">
      <Input
        placeholder="Search your favourite issue"
        onChange={handleChange}
        style={{ width: 500 }}
        allowClear 
      />
    </Space>
  </div>
);
