module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    accountType: {
      type: Sequelize.STRING,
    },
    authId: {
      type: Sequelize.STRING,
    },
    profilePic: {
      type: Sequelize.STRING,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nickName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthday_day: {
      type: Sequelize.INTEGER,
    },
    birthday_month: {
      type: Sequelize.STRING,
    },
    birthday_year: {
      type: Sequelize.INTEGER,
    },
    classOf: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    facebookAccount: {
      type: Sequelize.STRING,
    },
    line: {
      type: Sequelize.STRING,
    },
    facebookAccount: {
      type: Sequelize.STRING,
    },
    organ: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    field: {
      type: Sequelize.STRING,
    },
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });

  return User;
};
