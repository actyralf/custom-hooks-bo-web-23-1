import React from "react";
import Joke from "./components/Joke";
import "./styles.css";
import { useFetch } from "./hooks/use-fetch";

function Pokemon() {
  const result = useFetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return <p>{JSON.stringify(result.data)}</p>;
}

export default function App() {
  return (
    <>
      <Joke />
      <Pokemon />
    </>
  );
}
