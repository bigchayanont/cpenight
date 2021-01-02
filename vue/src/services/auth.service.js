import axios from "axios";
import decode from "jwt-decode"

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user",response.data.token, { expires: 1 });
          let payload = decode(response.data.token);
          localStorage.setItem("firstName", payload.firstName);
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("firstName");
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      accountType: user.accountType,
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
    });
  }

  checkEmailExists(email) {
    return axios
      .post(API_URL + "checkEmailExists", {
        email: email,
      })
      .then(
        response => {
        console.log("response " + response)
        return response.data;
      })
      .catch(() => {
        // console.log("err" + err)
        return "err"
      })
    
  }
}

export default new AuthService();