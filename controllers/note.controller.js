const NoteService = require('./../services/note.service');

const noteService = new NoteService();

const findAll = async(req, res) =>{
    try{
        const notes = await noteService.findAll();
        res.json(notes);
    }
    catch(error){
        next(error);
    }
};

const findById = async(req, res) =>{
    try{
        const {id} = req.params;
        const note = await noteService.findById(id);
        res.json(note);
    }
    catch(error){
        next(error);
    }
};

const create = async(req, res) =>{
    try{
        const body = req.body;
        const newNote = await noteService.create(body);
        res.status(201).json(newNote);
    }
    catch(error){
        next(error);
    }
};

const update = async(req, res) =>{
    try{
        const {id} = req.params;
        const body = req.body;
        const note = await noteService.update(id, body);
        res.json(note);
    }
    catch(error){
        next(error);
    }
};

const remove = async(req, res) =>{
    try{
        const {id} = req.params;
        await noteService.delete(id);
        res.status(204);
    }
    catch(error){
        next(error);
    }
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};