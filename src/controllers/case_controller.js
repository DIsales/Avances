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
   
    try{
        
        let result = await CaseService.filter(req.query)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "Consulta exitosa",
                data: result
        })

    }catch(error){
        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json(new Response(false, "Registros no encontrados"))
        }
        return res
        .status(http.StatusInternalServerError)
        .json({
            error: "Internal Server Error"
        })
    }
    

    /* if (result == errors.ErrNotFound) {
        return res
            .status(http.StatusNotFound)
            .json(new Response(false, "Registros no encontrados"))
    }

    return res
        .status(http.StatusOK)
        .json(new Response(true, 'Consulta exitosa')) */
}

module.exports = handCase;