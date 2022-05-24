const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    banda: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    compositor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    album: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    anoLancamento: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },

};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    banda: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    banda: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};