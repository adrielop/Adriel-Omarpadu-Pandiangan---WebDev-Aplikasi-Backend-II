const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE nama=$1`;
        const result = await databaseQuery(query, [nama]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByPhoneEmail = async (email,telpon) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE email=$1 and telpon=$2`;
        const result = await databaseQuery(query, [email,telpon]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUrl = async (nama,jenis_kelamin,angkatan,email,telpon,deskripsi) => {
    try {
        const query = `INSERT INTO praktikan_webdev VALUES ($1, $2, $3,$4, $5, $6)`;
        const result = await databaseQuery(query, [nama,jenis_kelamin,angkatan,email,telpon,deskripsi]);

        if (!result) {
            throw new Error('Error inserting URL');
        }
        return {
            message: 'URL inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const insertBulkUser = async (params) => {
    try {
        let arrayUserList = []
        JSON.parse(params,(a,b) => {arrayUserList.push(b)})
        for (let a = 0; a < (arrayUserList.length-1)/7; a++){
            const query = `INSERT INTO praktikan_webdev values ('${arrayUserList[a*7]}', '${arrayUserList[(a*7)+1]}',
                          '${arrayUserList[(a*7)+2]}', '${arrayUserList[(a*7)+3]}', '${arrayUserList[(a*7)+4]}',
                          '${arrayUserList[(a*7)+5]}')`;

            const result = await databaseQuery(query);

            if (!result) {
                throw new Error('Error Inserting Bulk Users!');
            }
            if (result.rowCount === 0){
                throw new Error('URL Not Found!');
            }
        }
        return {
            message: 'Users Inserted Successfully!'
        }
    } catch (error) {
        return error
    }
}

const deleteUrl = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE email=$1`;
        const result = await databaseQuery(query, [email]);

        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async ( nama, telpon) => {
    try {
        const query = `UPDATE praktikan_webdev SET telpon=$2 WHERE nama=$1`;
        const result = await databaseQuery(query, [nama, telpon]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    getUrlByPhoneEmail,
    insertUrl,
    insertBulkUser,
    deleteUrl,
    updateUrl
}