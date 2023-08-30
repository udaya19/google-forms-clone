import React, { useEffect, useState } from "react";
import { formByIdApi, submitResponseApi } from "../api/form";

const FillForm = ({ user, id }) => {
  const [form, setForm] = useState();
  const [responses, setResponses] = useState([]);
  const handleResponseChange = (questionId, answer) => {
    setResponses([
      ...responses,
      {
        questionId,
        answer,
      },
    ]);
  };
  const getFormDetails = async () => {
    const form = (await formByIdApi(id)).data;
    console.log("form", form);
    setForm(form.form);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("responses", responses);
    const result = (await submitResponseApi(responses, user._id, id)).data;
    console.log(result);
  };
  useEffect(() => {
    getFormDetails();
    console.log("User", user);
  }, []);
  return (
    <div>
      <div className=" w-[40%] mt-10 ml-10 border border-t-[#673ab6] border-t-8 rounded-md ">
        <div className="mb-10">{form?.title}</div>
        <div>{form?.description}</div>
        {form?.questions?.map((question) => (
          <div key={question._id}>
            {/* {question.questionType === "mcq" && ( */}
            <div>
              <ul>
                <h1>{question.title}</h1>
                {question.questionType === "mcq" &&
                  question.options.map((option, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name={`question_${question._id}`}
                          value={option}
                          // checked={responses[question._id] === option}
                          onChange={(e) =>
                            handleResponseChange(question._id, e.target.value)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                {question.questionType === "paragraph" && (
                  <li>
                    <input
                      onChange={(e) =>
                        handleResponseChange(question._id, e.target.value)
                      }
                      name="answer"
                    />
                  </li>
                )}
              </ul>
            </div>
            {/* )} */}
          </div>
        ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FillForm;
