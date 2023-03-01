import { useJoke } from "../hooks/use-joke";
export default function Joke() {
  const { joke, nextJoke } = useJoke(0);
  if (!joke) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{joke.joke}</h1>
      <button type="button" onClick={nextJoke}>
        Next Joke
      </button>
    </>
  );
}
