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

export const updateTitleApi = async (formData, id) =>
  apiInstance.post(`/form/update-title/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
