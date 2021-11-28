import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5qV1z13OwuKMF2G2NZFETErktjwqCPtiuSwZFGdDxME",
  }
});