const express = require('express');
const jwt = require('jsonwebtoken');
require('../config/database')
const lession = express.Router();
const { Lession,Role,TestLession,Assign } = require('../model/index')

lession.post('/getLession', async(req, res) => {
    try {
        const data = await Lession.findAll()
            res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }

});

lession.post('/getLessionDetail', async(req, res) => {
    try {
        const data = await Lession.findOne({where:req.body})
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }

});


lession.post('/getTest', async(req, res) => {
    try {
        const id = req.body.lessionId
        const dataLession = await Lession.findOne({where:{id}})
        const dataTestLession = await TestLession.findAll({where:{testId:dataLession.testId}})
        res.status(200).json(dataTestLession);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }
});

lession.post('/getAssign', async(req, res) => {
    try {
        const id = req.body.lessionId
        const dataLession = await Assign.findOne({where:{id}})
        const dataTestLession = await TestLession.findAll({where:{testId:dataLession.testId}})
        res.status(200).json(dataTestLession);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }
});

module.exports = lession;

