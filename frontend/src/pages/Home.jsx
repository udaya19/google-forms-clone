import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context/AuthProvider";

import forms from "../assets/forms.png";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    console.log("User", user);
  }, [user]);
  return (
    <div>
      <div className="flex p-6 justify-between">
        <div className="mr-10 text-gray-600">Forms</div>
        <div className="flex gap-8 text-gray-600">
          <div>{user.name}</div>
          <div onClick={logOut}>Logout</div>
        </div>
      </div>
      {/* Creating new form */}
      <div className="bg-[#f0f3f4] p-10">
        <p className="text-[#46474a] mb-5">Start a new form</p>
        <img src={forms} alt="forms" width={180} height={180} />
      </div>
      {/* Recent forms */}
    </div>
  );
};

export default Home;
