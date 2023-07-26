module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      role: {
        type: Sequelize.INTEGER, //1 - admin, 2 - crew, 10 - merchant, 20 - tourist
      }
    });
  
    return Role;
  };