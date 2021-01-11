import axios from "axios";

export default axios.create({
  baseURL: "http://10.26.100.190:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json",
//     "Access-Control-Allow-Origin" : "*"
//   },
// });
