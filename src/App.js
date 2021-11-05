import React, { useState, useEffect } from "react";
import { SearchBox } from "./components/Search";
import { CardList } from "./components/CardList";
import axios from "axios";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_ADDRESS}/issues`);
      setIssues(result.data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
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
      <CardList issues={filteredIssues}></CardList>
    </div>
  );
};

export default App;
