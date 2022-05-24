const { MusicsModel } = require('../infrastructure/database');

const MusicRepository = {
    async create(data) {
        try {
            const model = new MusicsModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { equipe: data.equipe };
            const result = await MusicsModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await MusicsModel.deleteOne({ nome: data.nome }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicsModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByCompositor(data) {
        try {
          const result = await MusicsModel.find({ compositor: data.compositor}).exec();
          return result;
        } catch (e) {
          return e;
        }
      },
};

module.exports = MusicRepository;