import apisauce from "apisauce";

const api = apisauce.create({
  baseURL: "https://api.github.com/users",
})

export default api;