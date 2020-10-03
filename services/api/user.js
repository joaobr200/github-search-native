import apisauce from "apisauce";

const user = apisauce.create({
  baseURL: "https://api.github.com/users",
});

export default user;
