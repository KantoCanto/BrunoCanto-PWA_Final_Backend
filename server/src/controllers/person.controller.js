import responseHandler from "../handlers/response.handler.js";    
import tmbdbApi from "../tmdb/tmdb.api.js";

const personDetail = async (req, res) => {
    try{
        const { personId } = req.params;

        const person = await tmbdbApi.personDetail({personId});

        responseHandler.ok(res, person)
    }catch{
        responseHandler.error(res)
    }
}

const personMedias = async (req, res) => {
    try{
        const { personId } = req.params;

        const medias = await tmbdbApi.personMedias({personId});

        responseHandler.ok(res, medias)
    }catch{
        responseHandler.error(res)
    }
}


export default{
    personDetail,
    personMedias
}