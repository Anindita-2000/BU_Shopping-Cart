import httpClient from "../http-common.js";

const getAll = () => {
  return httpClient.get("/getall");
};

const get = (oid) => {
  return httpClient.get(`/getorder/${oid}`);
};

const create = (data) => {
  return httpClient.post("/registerorder", data);
};

const update = (oid, data) => {
  return httpClient.put(`/updateorder/${oid}`, data);
};

const remove = (oid) => {
  return httpClient.delete(`/deleteorder/${oid}`);
};
const getDate = (date,data) => {
    return httpClient.get(`/getord/${date}`, data);
  };
const getCustomer = (customerName, data) => {
    return httpClient.get(`/getorders/${customerName}`, data);
  };
  

export default { getAll, create, get, update,remove,getDate, getCustomer };