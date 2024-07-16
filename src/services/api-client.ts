import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4464e755dd87486190b95a9202866432",
  },
});
