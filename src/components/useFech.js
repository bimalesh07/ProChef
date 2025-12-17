import { AwardIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const API_URL ="https://www.themealdb.com/api/json/v1/1/";

export const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setloading(false);
      return;
    }
    const fetchData = async () => {

      try {
        setloading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const json = await res.json();
        setdata(json);

      } catch (error) {
        setError(error.message);
      }
      finally{
        setloading(false)
      }
    };
    fetchData()

  }, [url]);


  return{data, loading, error};
};
