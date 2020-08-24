const pool = require('../lib/database/database');
const Case = require('../models/case.model');

const storageCase = {}

storageCase.create = (dataCase) => {
const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const Case = require('../models/ncase.model');



const storageCase = {}

storageCase.create = async (dataCase) => {
    let cases = new Case()
    cases = dataCase;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO pac_case VALUES (?,?,?,?,?,?,?,?,?)', [
            cases.uuid, cases.caseNumber, cases.uuidAssignedUser, cases.uuidOwnerUser, cases.uuidPersonPatient,
            cases.creationDate, cases.uuidStage, cases.reasonForConsultation, cases.desisted
        ], (err, results, fields) => {
            if (err) {
<<<<<<< HEAD
                reject(err.errno)
            }
            resolve(results)
        })
    })
}

storageCase.filter = (query) => {
    

    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err.errno)
            }
            if(results == undefined || results.length == 0 ){
                reject(404)
            }
=======
                reject(err)
            }
            console.log(results)
>>>>>>> e5079fd768dfcc5ac1634876470bdee6e6142195
            resolve(results)
        })
    })
}

module.exports = storageCase;