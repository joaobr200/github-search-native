import apisauce from "apisauce";

const search = apisauce.create({
  baseURL: "https://api.github.com/search",
});

export default search;
