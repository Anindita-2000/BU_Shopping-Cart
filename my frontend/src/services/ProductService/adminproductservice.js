import httpClient from "../../http-connection/http-product";

const getAll = () => {
  return httpClient.get("/getall");
};

const get = (id) => {
  return httpClient.get(`/get/${id}`);
};

const create = (data) => {
  return httpClient.post("/register", data);
};

const update = (data,id) => {
  return httpClient.put(`/update/${id}`,data);
};

const remove = (id) => {
  return httpClient.delete(`/deleteproduct/${id}`);
};

  

export default { getAll, create, get, remove,update };