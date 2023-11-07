"use client";
import Movies from "../ui/movies";
import MovieSkeleton from "../ui/movie_Skeleton";
import { Suspense } from "react";

const categories = () => {
  return <div className="min-h-screen ">{<Movies />}</div>;
};

export default categories;
