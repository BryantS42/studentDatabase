module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        firstname: {
            type: Sequelize.STRING
          },
          lastname: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          gpa: {
            type: Sequelize.INTEGER
          },
          studentCollege: {
            type: Sequelize.STRING
          },
          imageURL: {
            type: Sequelize.STRING
          },
    });
  
    return Student;
  };