const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    sipnosis: {
        type: String,
        required: [true, 'Sipnosis requerida'],
    },
    url: {
        type: String,
        required: [true, 'Url requerido'],
        unique: [true, 'Url ya existe']
    },
    portada: {
        type: String,
        required: [true, 'Portada requerida'],
    },
    anio_estreno: {
        type: Number,
        required: [true, 'Año de estreno requerido'],
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: false
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: false
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: false
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: false
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Media', MediaSchema)