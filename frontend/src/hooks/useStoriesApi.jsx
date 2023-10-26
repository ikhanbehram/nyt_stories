import { useEffect, useState } from "react";

function useStoriesApi(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function getStoriesApi() {
    setIsLoading(true);
    try {
      const json = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/stories?storiesType=${props}`,
        {
          method: "GET",
          "Content-Type": "application/json",
        }
      );
      const data = await json.json();
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getStoriesApi();
  }, []);

  return { data, isLoading, error };
}

export default useStoriesApi;
