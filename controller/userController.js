const express = require('express');
const jwt = require('jsonwebtoken');
require('../config/database')
const login = express.Router();
const { User,Role } = require('../model/index')

login.post('/login', async(req, res) => {
    try {
        const login = await User.findOne({ where: req.body})
        if(!login){
            res.status(200).json({status:401, message: "Invalid username or password" });
        }else{
            // const token = jwt.sign(
            //     { username: login.username },
            //     process.env.TOKEN_KEY,
            //     { expiresIn: '16h' })
            const roleData = await Role.findOne({ where: {id:login.role}})
            res.status(200).json({ status:200,userName: login.userName,id:login,role:login.role,roleName:roleData.roleName  } );
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }

});

login.post('/getRole', async(req, res) => {
    try {
            const roleData = await Role.findOne({ where: {id:1}})
            res.status(200).json({ roleData } );
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }

});


module.exports = login;

