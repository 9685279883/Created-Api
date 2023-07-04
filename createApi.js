//import

const Api = require("../models/Api");

//route handler

exports.createApi = async(req,res) => {
    try{
        //extract title and description from reauest body
        const {title,description} = req.body;
        //create a mew api object
        const response = await Api.create({title,description});
        // send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Succesfully'
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}


