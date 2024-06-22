import axios from "axios";

const URL = process.env.NEXT_PUBLIC_DEPLOYED_URL;

const handleResponse = (response) => {
  const data = response.data;
  if (data) {
    return data;
  } else {
    console.error("Unexpected response format:", response.data);
    throw new Error("Unexpected response format ");
  }
};

const handleError = (error) => {
  console.error(error);
  throw error;
};

const getAllItems = (endpoint) => {
  return axios
    .get(`${URL}/${endpoint}`)
    .then(handleResponse)
    .catch(handleError);
};

const getItem = (endpoint, id) => {
  return axios
    .get(`${URL}/${endpoint}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

const addItem = (endpoint, data) => {
  return axios
    .post(`${URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

const updateItem = (endpoint, id, data) => {
  return axios
    .put(`${URL}/${endpoint}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

const deleteItem = (endpoint, id) => {
  return axios
    .delete(`${URL}/${endpoint}/${id}`)
    .then(handleResponse)  
    .catch(handleError);
};

export { getAllItems, getItem, addItem, updateItem, deleteItem };
