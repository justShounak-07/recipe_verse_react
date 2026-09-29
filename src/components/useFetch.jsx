import React from "react";
import { useState, useEffect } from "react";

function useFetch(url, initvalue = null) {
  const [data, setData] = useState(initvalue); //set data
  const [error, setError] = useState(null); //set error state
  const [loading, setLoading] = useState(true); //set loading state

  useEffect(() => {
    const fetchRecipe = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request Failed (${response.status})`);

          // handle no response seperately in App.jsx
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [url]);
  return { data, error, loading };
}

export default useFetch;
