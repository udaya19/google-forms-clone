import apiInstance from ".";

export const formByIdApi = async (id) =>
  apiInstance.post(
    `/form/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
