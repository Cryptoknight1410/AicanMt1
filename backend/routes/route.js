import fetchingBlogs from "../api/fetchingBlogs.js";

const calling = (app) => {
  app.get("/blogsDB", fetchingBlogs);
};

export default calling;
