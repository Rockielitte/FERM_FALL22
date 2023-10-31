import React, { useState } from "react";
// import defautPoster from "../assets/defaultPoster.jpg";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Film } from "../types";
type Props = {
  data: Film;
};
const MovieCard = ({ data }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" w-full border shadow-lg flex p-4 flex-col md:flex-row md:h-[400px] overflow-hidden rounded-lg">
      <div className="md:w-3/5 w-full h-[400] align-middle md:h-full ">
        <img
          src={data.thumbnail}
          className="w-full h-full rounded-sm object-fill"
        />
      </div>
      <div className="md:w-2/5 w-full bg-slate-900  flex flex-col px-4 py-2 bg-color-333 h-full">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 ">
          {data.title}
        </h3>
        <span className="text-xl lg:text-sm lg:mb-4">{data.year}</span>
        <div className=" flex-1 overflow-hidden ">
          <p className="text-sm text-gray-100 leading-snug truncate-overflow h-3/5 overflow-y-auto ">
            {data.extract}
          </p>
        </div>
        <div className="button-container flex justify-between mb-4 ">
          <button
            className="text-lg mr-4 lg:text-sm text-gray-200 "
            onClick={() => {
              setIsShow(true);
            }}
          >
            Trailer
          </button>
          <button
            className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"
            onClick={() => {
              navigate(`/details/${data.id}`);
            }}
          >
            Detail
          </button>
        </div>
      </div>
      {isShow && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-40 flex justify-center items-center p-14">
          <div className=" relative p-8 bg-slate-400 bg-opacity-50 rounded-lg shadow-lg">
            <ImCross
              className="absolute right-2 top-2 text-xl cursor-pointer hover:scale-125 transition-all text-white"
              onClick={() => {
                setIsShow(false);
              }}
            />
            <iframe
              width="560"
              height="315"
              src={
                data.videoUrl ||
                "https://www.youtube.com/embed/rrGMENN1iaY?si=ubUTEeTjrdY9vGQw"
              }
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
