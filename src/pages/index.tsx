import React from "react";
import filmJson from "../datas/film.json";
import MovieCard from "../components/MovieCard";
import LoadingScreen from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { Film } from "../types/index";
import Error from "../components/Error";
const index = () => {
  const filmFetch = useFetch<Film[]>({
    url: "https://6540b93b45bedb25bfc26e5f.mockapi.io/films",
  });
  return (
    <div className="w-full h-full ">
      {filmFetch.error ? (
        <div className="w-ful h-full">
          <Error />
        </div>
      ) : !filmFetch.isLoading ? (
        <div className="w-full h-full">
          {filmFetch.data?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 overflow-auto">
              {filmFetch.data.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full justify-center items-center flex uppercase font-bold ">
              no film found
            </div>
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};
export default index;
