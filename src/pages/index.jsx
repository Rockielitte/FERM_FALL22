import React from "react";
import filmJson from "../datas/film.json";
import MovieCard from "../components/MovieCard";
const index = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
      {filmJson.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default index;
