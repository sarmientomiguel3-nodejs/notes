const {faker}  = require('@faker-js/faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class NoteService {
    constructor(){
        this.notes = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let i = 0; i < limit; i++){
            this.notes.push({
                id: faker.string.uuid(),
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                date: faker.date.past(),
                user_id: faker.string.uuid(),
            });
        }
    }

    async create(data) {
        const newNote =  {
            id: faker.string.uuid(),
            ...data
        }
        this.notes.push(newNote);
        return newNote;
    }

    async findAll(){
        const query = 'SELECT * FROM notes'
        const [data] = await sequelize.query(query);
        return data;
    }

    async findOne(id) {
        const note = this.notes.find(item => item.id === id);
        if(!note) {
            throw boom.notFound('note not found');
        }
        if (note.isBlock){
            throw boom.conflict('note is block');
        }
        return note;
    }

    async update(id, changes){
        const index = this.notes.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('note not found');
        }
        const note = this.notes[index];
        this.notes[index] = {
            ...note,
            ...changes
        };
        return this.notes[index];
    }

    async delete(id) {
        const index = this.notes.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('note not found');
        }
        this.notes.splice(index, 1);
        return {id};
    }
}

module.exports = NoteService;