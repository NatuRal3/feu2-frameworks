import React, { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ApiCalls() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error trying to load</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
export default ApiCalls;
