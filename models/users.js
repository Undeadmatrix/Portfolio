var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    // Giving the user model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  user.associate = function (models) {
    // Associating user with Posts
    // When an user is deleted, also delete any associated Posts
    user.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  user.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the user Model lifecycle
  // In this case, before a user is created, we will automatically hash their password
  user.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return user;
};
