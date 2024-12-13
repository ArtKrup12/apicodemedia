const { Sequelize } = require('sequelize');

// กำหนดข้อมูลการเชื่อมต่อ MySQL
const sequelize = new Sequelize('school', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // ปิด log query
});

module.exports = sequelize;
