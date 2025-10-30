import React, { useState, useEffect } from 'react';

function useFetch(api_url) {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If API url is empty → do nothing but maintain default state
    if (!api_url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(api_url);
        const response = await result.json();
        setData(response);
      } catch (ex) {
        setError(ex.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api_url]);

  return { data, error, loading }; // ✅ ALWAYS return these
}

export default useFetch;
