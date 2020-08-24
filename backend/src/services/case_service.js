const uuid = require('uuid')
const StoreCase = require('../storage/case_storage')
const Case = require('../models/case.model')

const CaseService = {}


CaseService.create = async ()=>{
    var cases = new Case()
    cases.uuid = uuid.v4()
    


    try {
        let result = await StoreCase.create(cases)
        return result
    } catch (error) {
        return error
    }
}


CaseService.filter = async (FilterCase)=>{
    let CaseFilter = FilterCase

    //let queryDate = 'SELECT bornDate FROM PAS_Person'

    let query = 'SELECT * FROM PAC_Case '
    let where =0


    for(var elemet in CaseFilter){
        if(where>0){
            if(elemet.desisted == 1){
                query = query + ' and desisted = 1 '
            }
            if(elemet.assigned == null){
                query = query + ' and uuidAssignedUser = null '
            }
        }
        if(elemet.assigned == null){
            query = query + ' where uuidAssignedUser = null '
            where = where+1
        }
        if(elemet.user == null){
            query = query + ' where uuidAssignedUser = null '
            where = where+1
        }

        if(elemet.desisted == 1){
            query = query + ' where desisted = 1 '
            where = where+1
        }
        if(elemet.order == 'asc'){
        query = query + ' order by creationDate asc '
        }
        if(elemet.order == 'desc'){
        query = query + ' order by creationDate desc '
        }

        return await StoreCase.filter(query)
    }




    
    


    try {
        let result = await StoreCase.filter(cases)
        return result
    } catch (error) {
        return error
    }
}