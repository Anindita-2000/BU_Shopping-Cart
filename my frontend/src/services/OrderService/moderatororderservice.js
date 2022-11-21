import httpClient from "../../http-connection/http-order";

const getAll = () => {
  return httpClient.get("/getall");
};

const get = (oid) => {
  return httpClient.get(`/getorder/${oid}`);
};

export default { getAll, get };
