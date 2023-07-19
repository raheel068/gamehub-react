import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9bd0e849b704cc9a67d30a69ebcf812",
  },
});
