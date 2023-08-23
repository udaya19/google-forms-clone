import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("Untitled Form");
  const [desc, setDesc] = useState("Untitled Description");
  return (
    <div>
      <div className=" w-[40%] mt-10 border border-t-[#673ab6] border-t-8 rounded-md ">
        <div className="mb-10">
          <input
            type="text"
            className="focus:border-b-4 focus:border-b-[#673ab6] focus:outline-none text-2xl font-extrabold"
            value={title}
            width="100%"
          />
        </div>
        <div>
          <input
            type="text"
            className="focus:outline-none focus:border-b-[#673ab6] focus:border-b-2"
            value={desc}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
