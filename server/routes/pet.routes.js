const { create, getAll, getOne, updateOne,deleteOne } = require('../controllers/pet.controllers');

const express = require('express');

const petRouter = express.Router();

petRouter
    .route('/')

petRouter
    .route('/pets')
    .post(create)
    .get(getAll);

petRouter
    .route('/pets/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne);

module.exports = petRouter;