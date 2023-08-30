import React, { useContext, useEffect, useState } from "react";
import FormData from "form-data";
import { useParams } from "react-router-dom";

import { formByIdApi, updateTitleApi } from "../api/form";

import { AuthContext } from "../context/AuthProvider";
import FillForm from "../components/FillForm";

const Form = () => {
  const { user } = useContext(AuthContext);
  const [isFormOwner, setIsFormOwner] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const getFormDetails = async (req, res) => {
    const result = (await formByIdApi(id)).data;
    console.log(result);
    if (result.success) {
      setTitle(result.form.title);
      setDesc(result.form.description);
    }
  };
  const validateFormOwner = () => {
    const isOwner = user.forms.includes(id);
    isOwner ? setIsFormOwner(true) : setIsFormOwner(false);
  };
  const updateTitle = async (e) => {
    // setTitle(e.target.value);

    console.log(title);
    // const formData = new FormData();
    // formData.append("title", title);
    // const result = (await updateTitleApi(formData, id)).data;
    // console.log(result);
  };
  const updateDescription = async (e) => {
    setDesc(e.target.value);
  };
  useEffect(() => {
    getFormDetails();
    validateFormOwner();
  }, []);
  return (
    <div>
      {isFormOwner ? (
        <div className=" w-[40%] mt-10 border border-t-[#673ab6] border-t-8 rounded-md ">
          <div className="mb-10">
            <input
              type="text"
              className="focus:border-b-4 focus:border-b-[#673ab6] focus:outline-none text-2xl font-extrabold"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={updateTitle}
              width="100%"
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none focus:border-b-[#673ab6] focus:border-b-2"
              value={desc}
              onChange={updateDescription}
            />
          </div>
        </div>
      ) : (
        <FillForm id={id} user={user} />
      )}
    </div>
  );
};

export default Form;
