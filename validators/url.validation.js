const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getUrlByPhoneEmail =[
    param('email').isEmail(),
    param('telpon').isLength({min:12}),
    validator
]

const insertUrl =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['l','p']),
    body('angkatan').isNumeric({gt: 2018}),
    body('email').isEmail(),
    body('telpon').isLength({min: 12}),
    body('deskripsi').not().isEmpty(),
    validator
]

const insertBulkUser = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['P','L']),
    body('*.angkatan').isNumeric({gt : 2018}),
    body('*.email').isEmail(),
    body('*.telpon').isLength(12),
    body('*.deskripsi').not().isEmpty(),
    validator
]

const deleteUrl = [
    body('email').isEmail(),
    validator
]

const updateUrl = [
    body('nama').isLength({min: 5}),
    body('telpon').isLength({min: 12}),
    validator
]

module.exports = {
    getUrlByName,
    getUrlByPhoneEmail,
    insertUrl,
    insertBulkUser,
    deleteUrl,
    updateUrl
}
