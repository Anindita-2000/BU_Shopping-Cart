import httpClient from "../../http-connection/http-order";

const getAll = () => {
  return httpClient.get("/getall");
};

const get = (oid) => {
  return httpClient.get(`/getorder/${oid}`);
};

const create = (data) => {
  return httpClient.post("/registerorder", data);
};

const remove = (oid) => {
  return httpClient.delete(`/deleteorder/${oid}`);
};

export default { getAll, create, get, remove };
