import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const RecentForm = ({ f }) => {
  return (
    <div className="border-2 cursor-pointer w-[275px] m-3 h-[300px]">
      <div className="bg-[#efeaf7] w-full h-[75%]">
        <div className="bg-white ml-5 w-[80%] h-[50px] border-t-4 rounded-md mt-1 border-t-[#673ab6]">
          <h1 className="font-semibold m-1">{f.title}</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold text-sm ml-3 mt-4 ">{f.title}</h3>
        <div className="flex mt-4 gap-2 items-center">
          <RiDeleteBin2Line size={17} />
          <FiEdit2 size={17} />
        </div>
      </div>
    </div>
  );
};

export default RecentForm;
