import React, { useState } from "react";
import { useParams } from "react-router-dom";
import filmData from "../datas/film.json";
import _ from "lodash";
import { ImCross } from "react-icons/im";
import useFetch from "../hooks/useFetch";
import { Film } from "../types";
import Error from "../components/Error";
import LoadingScreen from "../components/Loading";
const Detail = () => {
  const getParams = useParams();
  const filmFetch = useFetch<Film>({
    url: `https://6540b93b45bedb25bfc26e5f.mockapi.io/films/${getParams.slug}`,
  });
  const [isShow, setIsShow] = useState(false);
  const data = filmFetch.data;
  return (
    <div className="w-full h-full ">
      {filmFetch.error ? (
        <div className="w-ful h-full">
          <Error />
        </div>
      ) : !filmFetch.isLoading ? (
        <div className="w-full h-full">
          {filmFetch.data ? (
            <div className="w-full h-full">
              <div className="bg-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                      <div className="h-[460px] rounded-lg bg-gray-300 mb-4 flex items-center justify-center">
                        {!isShow ? (
                          <img
                            className="w-full h-full object-cover rounded-lg"
                            src={data?.thumbnail}
                            alt="Product Image"
                          />
                        ) : (
                          <div className=" relative  bg-slate-400 bg-opacity-50 rounded-lg shadow-lg  w-full h-full flex items-center p-4">
                            <ImCross
                              className="absolute right-2 top-2 text-xl cursor-pointer hover:scale-125 transition-all text-white"
                              onClick={() => {
                                setIsShow(false);
                              }}
                            />
                            <iframe
                              // width={460}
                              // height={400}
                              src={
                                data?.videoUrl ||
                                "https://www.youtube.com/embed/rrGMENN1iaY?si=ubUTEeTjrdY9vGQw"
                              }
                              title="YouTube video player"
                              // frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className=" w-full h-2/3 "
                            ></iframe>
                          </div>
                        )}
                      </div>
                      <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                          <button
                            className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                            onClick={() => {
                              setIsShow(true);
                            }}
                          >
                            Trailer
                          </button>
                        </div>
                        <div className="w-1/2 px-2">
                          <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                            Watch now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex-1 px-4">
                      <h2 className="text-2xl font-bold mb-2">{data?.title}</h2>
                      <p className="text-gray-600 text-sm mb-4 flex gap-2">
                        {data?.cast.map((i) => (
                          <span className=" border-l px-1" key={i}>
                            {i}
                          </span>
                        ))}
                      </p>
                      <div className="flex mb-4">
                        <div className="mr-4">
                          <span className="font-bold text-gray-700">
                            Year:{" "}
                          </span>
                          <span className="text-gray-600">{data?.year}</span>
                        </div>
                        <div>
                          <span className="font-bold text-gray-700">
                            Genres:{" "}
                          </span>
                          <span className="text-gray-600">{data?.genres}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-bold text-gray-700">
                          Product Description:
                        </span>
                        <p className="text-gray-600 text-sm mt-2">
                          {data?.extract}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Detail;
