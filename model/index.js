const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// กำหนด Model
const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    passWord: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    role: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
    },
}, {
    timestamps: true, // สร้าง createdAt และ updatedAt
});

const Role = sequelize.define('Role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    roleName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});

const Lession = sequelize.define('Lession', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    linkVideo: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    linkPdf: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    assignId: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: true,
    },
    testId: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: true,
    },
}, {
    timestamps: true, // สร้าง createdAt และ updatedAt
});


const TestLession = sequelize.define('TestLession', {
    testId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    order: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansId1: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansName1: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansId2: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansName2: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansId3: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansName3: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansId4: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    ansName4: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
    },
    flag: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: true,
    },
}, {
    timestamps: true, // สร้าง createdAt และ updatedAt
})

const Assign = sequelize.define('Assign', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    detail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});

const TestReport = sequelize.define('TestReport', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    testId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    order: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    flagAns: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    round: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});


module.exports = { sequelize, User,Role,Lession,TestLession,Assign,TestReport   }
