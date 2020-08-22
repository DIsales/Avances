const CaseService = require('../services/case_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const Response = require('../models/response.model')
const Case = require('../models/case.model')

const handCase ={}

handCase.create = async (req, res) => {
    let DataCase = new Case()
    DataCase = req.body;

    let result = await CaseService.create(DataCase)

    if (result == errors.ErrDuplicateRegistry) {
        return res
            .status(http.StatusConflict)
            .json(new Response(false, "El registro ya existe"))
    }

    return res
        .status(http.StatusCreated)
        .json(new Response(true, 'El registro ha sido creado satisfactoriamente'))
}

handCase.filter = async(req, res)=>{
    let FilterCase = new Case()
    FilterCase

}

module.exports = handPerson;