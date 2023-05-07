import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (apiPath, queryTerm = "") => {
  const url = ` https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  const [data, setData] = useState([]);
  console.log("data:", data);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]);
  return { data };
};
