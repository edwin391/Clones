import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-em-f2927.cloudfunctions.net/api",
});

export default instance;

// baseURL: "http://localhost:5001/clone-em-f2927/us-central1/api",
