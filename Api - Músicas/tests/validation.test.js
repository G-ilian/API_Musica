const Constants=require('../src/utils/Constants');
const Validation=require('../src/utils/validation');

test('Caso válido - Criar musica', () => {
    const result = Validation.create({
        "nome":"Jesus Chorou",
        "banda":"Racionais MC's",
        "compositor":"Mano Brown",
        "album":"Nada como um Dia após o Outro Dia",
        "anoLancamento":2002
    });
    expect(result).toEqual(undefined);
});

/*
test('Caso Inválido - Criar Musica', () => {
    const result = Validation.create({
        "nome":"Vida Loka II",
        "banda":"Racionais MC's",
        "anoLancamento":2002,
    });
    expect(result).toEqual(undefined);
});
*/