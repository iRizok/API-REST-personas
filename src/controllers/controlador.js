import Personas from '../models/personas_db.js'

export const welcome = (req, res) => {
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Hola!! Esta es una API REST para ver la tabla de personas'
    })
}

export const listar = async (req, res) => {
    const personas = await Personas.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: personas
    })
};

export const buscar = async (req, res) => {
    const curp = req.params.curp;
    const persona = await Personas.findOne({
        where: {
            curp: curp
        }
    })
    res.status(200).json({
        ok: true,
        status: 200,
        body: persona
    })
};

export const agregar = async (req, res) => {
    const dataPersonas = req.body;

    const createPersona = await Personas.create({
        curp: dataPersonas.curp,
        nombre: dataPersonas.nombre,
        paterno: dataPersonas.paterno,
        materno: dataPersonas.materno,
        sexo: dataPersonas.sexo,
        fecha_nac: dataPersonas.fecha_nac,
        estado: dataPersonas.estado,
        municipio: dataPersonas.municipio,
        genero: dataPersonas.genero
    })
    res.status(201).json({
        ok: true,
        status: 200,
        message: 'Persona agregada'
    })
};

export const actualizar = async (req, res) => {
    const curp = req.params.curp;
    const dataPersonas = req.body;

    const updatePersona = await Personas.update({
        nombre: dataPersonas.nombre,
        paterno: dataPersonas.paterno,
        materno: dataPersonas.materno,
        sexo: dataPersonas.sexo,
        fecha_nac: dataPersonas.fecha_nac,
        estado: dataPersonas.estado,
        municipio: dataPersonas.municipio,
        genero: dataPersonas.genero
    },
    {
        where: {
            curp: curp
        }
    }
    )
    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Actualizado'
    })
};

export const eliminar = async (req, res) => {
    const curp = req.params.curp;

    const removePersona = await Personas.destroy({
        where: {
            curp: curp
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: 'Eliminado'
    })
}

