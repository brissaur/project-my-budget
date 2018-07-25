const apiHost = process.env.API_HOST || "localhost";
const apiPort = process.env.API_HOST || 4000;

export default {
  baseUrl: "http://" + apiHost + ":" + apiPort
};
