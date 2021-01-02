export default class User {
    constructor(id, email, password, accountType, authId, profilePic, firstName, lastName, nickName,
                birthday_day, birthday_month, birthday_year, classOf, phoneNumber, line, facebookAccount,
                organ, role, field) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.accountType = accountType;
      this.authId = authId;
      this.profilePic = profilePic;
      this.firstName = firstName;
      this.lastName = lastName;
      this.nickName = nickName;
      this.birthday_day = birthday_day;
      this.birthday_month = birthday_month;
      this.birthday_year = birthday_year;
      this.classOf = classOf;
      this.phoneNumber = phoneNumber;
      this.line = line;
      this.facebookAccount = facebookAccount;
      this.organ = organ;
      this.role = role;
      this.field = field;
    }
  }