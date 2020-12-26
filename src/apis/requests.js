import axios from "axios";

axios.defaults.baseURL = "https://paperbag.herokuapp.com/api/users";
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
  async users(url){
    return await axios.get(url)
  }
};

export default requests;
