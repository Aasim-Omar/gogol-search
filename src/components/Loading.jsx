import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <BallTriangle color="#00BFFF" height={200} width={100} />
    </div>
  );
};

export default Loading;
