import axios from "axios";
import authHeader from "./auth-header";
import decode from "jwt-decode";

const API_URL = "http://10.26.100.190:8080/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getUserData(user) {
    return axios
      .post(
        API_URL + "profile",
        {
          id: user.id,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  changePassword(id, oldPassword, newPassword) {
    return axios
      .post(
        API_URL + "changePassword",
        {
          id: id,
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  editData(user) {
    return axios
      .post(
        API_URL + "edit",
        {
          id: user.id,
          email: user.email,
          profilePic: user.profilePic,
          firstName: user.firstName,
          lastName: user.lastName,
          nickName: user.nickName,
          birthday_day: user.birthday_day,
          birthday_month: user.birthday_month,
          birthday_year: user.birthday_year,
          classOf: user.classOf,
          phoneNumber: user.phoneNumber,
          line: user.line,
          facebookAccount: user.facebookAccount,
          organ: user.organ,
          role: user.role,
          field: user.field,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  uploadProfile(formData) {
    let userData = decode(localStorage.getItem("user"));
    return axios
      .post(API_URL + "uploadPic/img?id=" + userData.id , formData,
      { headers: authHeader() ,'Content-Type': 'multipart/form-data'}
      )
      .then((response) => {
        console.log("response " + response);
        return response.data;
      })
      .catch(() => {
        // console.log("err" + err)
        return "err";
      });
  }

  getUserProfile() {
    let userData = decode(localStorage.getItem("user"));
    return axios
      .get(API_URL + "displayPic/" + userData.id,
      { headers: authHeader() }
      )
      .then((response) => {
        console.log("response " + response);
        return response.data;
      })
      .catch(() => {
        // console.log("err" + err)
        return "err";
      });
  }
}

export default new UserService();
