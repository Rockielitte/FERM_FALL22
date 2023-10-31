import React from "react";
import { BiSolidError } from "react-icons/bi";
type Props = {};

const Error = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 items-center">
      <BiSolidError className="text-8xl text-red-500" />
      <span className="font-semibold ">Opps, something wrong, try again !</span>
    </div>
  );
};

export default Error;
