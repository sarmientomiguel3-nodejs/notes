const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {createNoteDto, updateNoteDto,getNoteDto} = require('./../dtos/note.dto');
const {findAll, findById, create, update, remove} = require('../controllers/note.controller');


const router = express.Router();

router.get('/', findAll);
router.get(
    '/:id',
    validatorHandler(getNoteDto, 'params'),
    findById

);
router.post(
    '/',
    validatorHandler(createNoteDto, 'body'),
    create
);
router.patch(
    '/:id',
    validatorHandler(getNoteDto, 'params'),
    validatorHandler(updateNoteDto, 'body'),
    update
);
router.delete(
    '/:id',
    validatorHandler(getNoteDto, 'params'),
    remove
);

module.exports = router;