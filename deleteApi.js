//import

const Api = require("../models/Api");

//route handler

exports.deleteApi = async(req,res) => {
    try{
       
      const {id} = req.params;
      await Api.findByIdAndDelete(id);
      res.json({
        success:true,
        message:"Api Deleted"
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





