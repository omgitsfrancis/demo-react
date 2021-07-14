import axios from "axios";
import React, { useState } from "react";

// API requests
const getChuckNorrisJoke = () => {
  return axios.get("https://api.chucknorris.io/jokes/random");
};

const JokePage = () => {
	// states
  const [joke, setJoke] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Event handlers
  const handleGetJokeClick = () => {
		setIsLoading(true);

    getChuckNorrisJoke().then((res) => {
      setJoke(res.data.value);
    }).finally(() => {
			setIsLoading(false);
		});
  };

  return (
    <div>
      <div>Joke: {isLoading ? "Loading..." : joke}</div>
      <button disabled={isLoading} onClick={handleGetJokeClick}>Get Joke</button>
    </div>
  );
};

export default JokePage;
