import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios(`${process.env.REACT_APP_API_ADDRESS}/issues`);
        setData(result.data);
        console.log(result.data);
    };

  fetchData();
}, []);

  return (
    <div className="App">
      {data && data[0].name}
    </div>
  );
}

export default App;
