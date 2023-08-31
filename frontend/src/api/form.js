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

export const updateDescriptionApi = async (formData, id) =>
  apiInstance.post(`/form/update-description/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const submitResponseApi = async (responses, userId, formId) =>
  apiInstance.post(
    `/responses/new-response/${formId}`,
    {
      userId,
      responses,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    }
  );
