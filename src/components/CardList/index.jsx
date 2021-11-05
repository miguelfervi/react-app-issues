import React, {useState, useEffect} from "react";
import { Card } from "../Card";
import axios from 'axios';
export const CardList = () => {

    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`${process.env.REACT_APP_API_ADDRESS}/issues`);
        setData(result.data);
        console.log(result.data);
      };
  
      fetchData();
    }, []);
  
    console.log(data);
  return (<div className="card-list" > {
    data &&  data.map(issue => (<Card key={issue.id} issue={issue} />
    ))
  }
  </div>)
};
