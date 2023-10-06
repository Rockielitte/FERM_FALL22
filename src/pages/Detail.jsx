import React, { useState } from "react";
import { useParams } from "react-router-dom";
import filmData from "../datas/film.json";
import _ from "lodash";
import { ImCross } from "react-icons/im";
const Detail = () => {
  const getParams = useParams();
  const data = _.find(filmData, (value) => {
    return value.href === getParams.slug;
  });
  const [isShow, setIsShow] = useState(false);

  return (
    <div class="bg-gray-100 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 mb-4 flex items-center">
              {!isShow ? (
                <img
                  class="w-full h-full object-cover rounded-lg"
                  src={data.thumbnail}
                  alt="Product Image"
                />
              ) : (
                <div className=" relative p-8 bg-slate-400 bg-opacity-50 rounded-lg shadow-lg ">
                  <ImCross
                    className="absolute right-2 top-2 text-xl cursor-pointer hover:scale-125 transition-all text-white"
                    onClick={() => {
                      setIsShow(false);
                    }}
                  />
                  <iframe
                    width={460}
                    height={400}
                    src={
                      data.videoUrl
                        ? data.videoUrl
                        : "https://www.youtube.com/embed/Z5xGIsfQDVM?si=sAMJFZ7gxq5J6Jrj"
                    }
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="object-cover"
                  ></iframe>
                </div>
              )}
            </div>
            <div class="flex -mx-2 mb-4">
              <div class="w-1/2 px-2">
                <button
                  class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                  onClick={() => {
                    setIsShow(true);
                  }}
                >
                  Trailer
                </button>
              </div>
              <div class="w-1/2 px-2">
                <button class="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Watch now
                </button>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold mb-2">{data.title}</h2>
            <p class="text-gray-600 text-sm mb-4 flex gap-2">
              {data.cast.map((i) => (
                <span className=" border-l px-1">{i}</span>
              ))}
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700">Year: </span>
                <span class="text-gray-600">{data.year}</span>
              </div>
              <div>
                <span class="font-bold text-gray-700">Genres: </span>
                <span class="text-gray-600">{data.genres}</span>
              </div>
            </div>

            <div>
              <span class="font-bold text-gray-700">Product Description:</span>
              <p class="text-gray-600 text-sm mt-2">{data.extract}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
