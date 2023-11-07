"use client";
import { useEffect, useState } from "react";
import Items from "../lib/types";
import Image from "next/image";

function MovieFetch() {
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

  //Fetch the data from TMDB
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
    <div>
      <div className="grid sm:grid-cols-3 my-8 px-0 gap-2 grid-cols-2">
        {movies.map((item: Items) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center hover:border-solid hover:border-2 hover:border-purple-800 cursor-pointer">
            <Image
              className="h-auto w-auto"
              alt=""
              src={"http://image.tmdb.org/t/p/w500/" + item.backdrop_path}
              width={800}
              height={800}
            />
            <div className="absolute bottom-0 px-0 text-base sm:text-s">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieFetch;
