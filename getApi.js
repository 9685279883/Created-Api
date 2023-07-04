const Api = require("../models/Api");


exports.getApi = async(req, res) => {
    try {
        //fetch all api items 
        const apis = await Api.find({});

        //response update
        res.status(200)
        .json({
            success:true,
            data:apis,
            message:"Api data is fetched"
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }
}

exports.getApiById = async(req,res) =>{

    try {
        //extract api items basic on id
        const id = req.params.id
        const api = await Api.findById( {_id: id})
        
        //data for gvien id not found
        if (!api){
            return res.status(404).json({
                success:false,
                message:"NO data found both given id",
            })
        }
        //Data for given id found
        res.status(200).json({
            success:true,
            data:api,
            message: `Api ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

    }

}





