const Joi = require('joi');

const id = Joi.string();
const title = Joi.string();
const description = Joi.string();
const date = Joi.date();
const user_id = Joi.string();

const createNoteDto = Joi.object({
    title: title.required(),
    description: description,
    user_id: user_id.required(),
});

const updateNoteDto = Joi.object({
    title: title,
    description: description,
});

const getNoteDto = Joi.object({
    id: id.required(),
});

module.exports = {
    createNoteDto,
    updateNoteDto,
    getNoteDto
}