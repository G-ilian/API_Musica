const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const musicRepository = require('../port/music_repository');
const Constraints = require('../utils/musics_validation');
const Validation = require('../utils/validation');

const Musics = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await musicRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await musicRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await musicRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByCompositor(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await musicRepository.getByCompositor(data);

            return response;
        } catch (error) {
            return error;
        }
    },
    async list() {
        try {
            const response = await musicRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Musics;