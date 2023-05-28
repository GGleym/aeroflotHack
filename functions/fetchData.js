import { useEffect } from 'react';
import { useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      try {
        const request = await fetch(url)
        const response = await request.json()
        setData(response)
        setLoading(false)
      } catch (err) {
        setError(err)
      }

    };
    fetchData()
  }, [url]);

  return {
    loading,
    data,
    error
  };
}
