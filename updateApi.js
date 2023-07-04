//import

const Api = require("../models/Api");

//route handler

exports.updateApi = async(req,res) => {
    try{
        //id fatch ka second tarika
        const {id} = req.params;
        const {title, description} = req.body;

        const api = await Api.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt: Date.now()}
        )
        res.status(200).json({
            success:true,
            data:api,
            message: `Updated Successfully`,
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





