import httpClient from "../../http-connection/http-product";

  const getAll = () => {
    return httpClient.get("/getall");
  };

  export default { getAll };