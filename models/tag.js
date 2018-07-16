module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Post, {
      through: 'PostTags',
      as: 'tags',
      foreignKey: 'tagId'
    });
  };
  return Tag;
};
