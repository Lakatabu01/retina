"use client";
import { useEffect, useState } from "react";
import Items from "../lib/types";
import Image from "next/image";

function Movies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTBlZWY3ZjA4YTc3MGNiNmYyOWZkOThlNjBhZTU0YyIsInN1YiI6IjY1NDgzNjVjMWFjMjkyN2IzMDI4NTQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqiHCCXrEOCeUpjeU-5jIoQS31__wF_qthw1gNifq60",
    },
  };

  const [movies, setMovies] = useState<object[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetch(url, options);
        const response = await data.json();
        setMovies(response.results);
        console.log(response.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    //Populate the component with data from fetched API
    <div>
      <h1>movies</h1>

      <div>
        {movies.map((item: Items) => (
          <div key={item.id}>
            <Image
              alt=""
              src={"http://image.tmdb.org/t/p/w500/" + item.backdrop_path}
              width={100}
              height={100}
            />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
