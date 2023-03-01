import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const newData = await response.json();

      setData(newData);
    }

    startFetching();
  }, [url]);
  return { data };
}
