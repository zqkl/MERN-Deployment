const Pet = require('../models/pet.models');

const create = (req,res) =>{
    Pet.create(req.body)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

const getAll = (req,res) =>{
    Pet.find()
        .then(pets => res.status(201).json(pets))
        .catch(err => res.status(400).json(err))
}

const getOne = (req,res) =>{
    const { id } = req.params;
    Pet.findById(id)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

const updateOne = (req,res) =>{
    const { id } = req.params;
    Pet.findByIdAndUpdate(id,req.body,{ new: true, runValidators: true })
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

const deleteOne = (req,res) =>{
    const { id } =req.params;
    Pet.findByIdAndDelete(id)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

module.exports = { create, getAll, getOne, updateOne, deleteOne};