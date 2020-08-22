const uuid = require('uuid')
const StoreCase = require('../storage/case_storage')
const Case = require('../models/case.model')

const CaseService = {}


CaseService.create = ()=>{
    var cases = new Case()
    cases.uuid = uuid.v4()
    


    try {
        let result = await StoreCase.create(cases)
        return result
    } catch (error) {
        return error
    }
}