import React from "react";
import { SearchBox } from "./components/Search";
import { CardList } from "./components/CardList";

const App = () => {
  return (
    <div>
      <SearchBox placeholder="search issues"></SearchBox>
      <CardList></CardList>
    </div>
  );
};

export default App;
