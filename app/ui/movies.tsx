"use client";
import MovieFetch from "./movieFetch";
import { Suspense } from "react";
import MovieSkeleton from "./movie_Skeleton";
import Link from "next/link";

function Movies() {
  return (
    //Populate the component with data from fetched API
    <div>
      <div className=" relative flex justify-center items-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {" "}
        <div className="absolute left-2">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>
        <h1>Top 20 movies in Nigeria today</h1>
      </div>

      <Suspense fallback={<MovieSkeleton />}>{<MovieFetch />}</Suspense>
    </div>
  );
}

export default Movies;
