class BaseRepository {
    constructor(model){
        this.model = model;
    }
    async findAll(){
        return await this.model.findAll();
    }
    async findById(id){
        return await this.model.findByPk();
    }
    async create(data){
        return await this.model.create(data);
    }
    async update(id, data){
        const entity = await this.getById(id);
        if (entity) {
            await entity.update(data);
            return entity;
        }
        return null;
    }
    async delete(id){
        const entity = await this.getById(id);
        if (entity) {
            await entity.destroy();
            return entity;
        }
        return null;
    }
}

module.exports = BaseRepository;