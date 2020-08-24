const CaseService = require('../services/case_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const Response = require('../models/response.model')
const Case = require('../models/ncase.model')

const handCase = {}

handCase.create = async (req, res) => {

    let result = await CaseService.create(req.body)

    if (result == errors.ErrDuplicateRegistry) {
        return res
            .status(http.StatusConflict)
            .json(new Response(false, "El registro ya existe"))
    }

    return res
        .status(http.StatusCreated)
        .json(new Response(true, 'El registro ha sido creado satisfactoriamente'))
///////////
    try {
        let result = await CaseService.create(req.body)
        return res.status(http.StatusOK)
            .json(
                {
                    ok: true,
                    message: "funciona",
                    data: result
                })
    } catch (error) {

        if (res == errors.UnhandledPromiseRejectionWarning) {
            return res
            .status(http.StatusBadRequest)
            .json(new Response(false, "Un tipo de dato enviado es incorrecto"))
        }

        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}


module.exports = handCase;