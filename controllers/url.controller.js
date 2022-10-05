const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const url = await urlServices.getUrlByName(nama);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByPhoneEmail = async (req, res) => {
    try {
        const { email,telpon } = req.params;
        const result = await urlServices.getUrlByPhoneEmail(email,telpon);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertUrl = async (req, res) => {
    try {
        const { nama,jenis_kelamin,angkatan,email,telpon,deskripsi } = req.body;
        const result = await urlServices.insertUrl(nama,jenis_kelamin,angkatan,email,telpon,deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertBulkUser = async (req, res) => {
    try {
        const result = await urlServices.insertBulkUser(JSON.stringify(req.body));

        if (result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message); 
    }
}
const deleteUrl = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await urlServices.deleteUrl(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { nama,telpon } = req.body;
        const result = await urlServices.updateUrl( nama,telpon);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    getUrlByPhoneEmail,
    insertUrl,
    insertBulkUser,
    deleteUrl,
    updateUrl
}