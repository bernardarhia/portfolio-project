import axios from "axios";

axios.defaults.baseURL = "https://axios-app.firebaseio.com";
const requests = {
  async verify(url, token) {
    return await axios.post(url, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async signup(url, data) {
    return await axios.post(url, data);
  },
  async login(url, data) {
    return await axios.post(url, data);
  },
  async logout(url, data) {
    return axios.post(url, data);
  },
};

export default requests;
