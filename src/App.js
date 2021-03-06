import React, { useState, useEffect } from "react";
import { SearchBox } from "./components/SearchBox";
import { CardList } from "./components/CardList";
import axios from "axios";
import { AlertMessage } from "./components/AlertMessage";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_ADDRESS}/issues`);
      setIssues(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    e.target.value.trim() !== ""
      ? navigate(`/?q=${e.target.value}`)
      : navigate(`/`);
  };

  const filteredIssues = issues.filter((issue) =>
    issue.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <SearchBox
        handleChange={handleChange}
        placeholder="search issues"
      ></SearchBox>
      {filteredIssues && filteredIssues.length > 0 ? (
        <CardList issues={filteredIssues}></CardList>
      ) : loading ? (
        <div className="spinner">
          <Spin />
        </div>
      ) : (
        <AlertMessage
          className="alert"
          message="Error Text"
          description="Not found issues with this criteria"
          type="error"
          button={false}
        />
      )}
    </div>
  );
};

export default App;
