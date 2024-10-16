import React, { useState, useEffect } from 'react';

const RandomJokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  // This should be inside the component function
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
      const data = await response.json();
      // Fix template literal and access joke from array
      setJoke(`${data[0].setup} - ${data[0].punchline}`);
      setLoading(false);
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Please try again.");
      setLoading(false);
    }
  };

  const handleNewJoke = () => {
    fetchJoke(); // You were missing the closing brace for this function
  };

  return (
    <div>
      <h1>Random Joke Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke}</p>
          <button onClick={handleNewJoke}>Get a new joke</button>
        </>
      )}
    </div>
  );
};

export default RandomJokeGenerator;
