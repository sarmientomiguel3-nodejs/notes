const BaseRepository = require('./base.repository');
const Note = require('./../entities/note.entity');

class NoteRepository extends BaseRepository {
    constructor() {
        super(Note);
    }
}

module.exports = NoteRepository;