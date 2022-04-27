const Musica=require('../src/application/music_service')
const Constants=require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const MusicRepository=require('../src/port/music_repository')

jest.mock('../src/port/music_repository');

test('CREATE - Música Válida', async () => {

    const data = {
        nome: "De Volta à Cena",
        banda: "Racionais MC's",
        compositor:"Edi Rock",
        album:"Nada como um Dia após o Outro Dia",
        anoLancamento:2002
    }

    const id = Utils.generateUuid();

    MusicRepository.create.mockResolvedValue({ ...data, id });

    const result = await Musica.create(data);
    expect(result).toEqual({ ...data, id });
})