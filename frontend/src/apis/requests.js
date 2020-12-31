import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/users";
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
  async logout(url, token) {
    return axios.post(url,null,{ headers: { Authorization: `Bearer ${token}` }});
  },
  async users(url){
    return await axios.get(url)
  },
  async me(url, token){
    return await axios.get(url,{ headers: { Authorization: `Bearer ${token}` }})
  }
};

export default requests;
