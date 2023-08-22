import apiInstance from ".";

export const loginApi = async (formData) =>
  apiInstance.post("/user/login", formData);

export const getUserProfile = async (token) =>
  apiInstance.post(
    "/user/profile",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
