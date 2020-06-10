module.exports = function(sequelize, DataTypes) {
    var post = sequelize.define("post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      AuthorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    post.associate = function(models) {
      // We're saying that a post should belong to an Author
      // A post can't be created without an Author due to the foreign key constraint
      post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return post;
  };
  