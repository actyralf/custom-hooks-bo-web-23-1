import { useState } from "react";
import { useFetch } from "./use-fetch";

export function useJoke() {
  const [id, setId] = useState(0);
  const { data: joke } = useFetch(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );

  function handleNextJoke() {
    setId(joke?.nextId || 0);
  }

  return { joke, nextJoke: handleNextJoke };
}
