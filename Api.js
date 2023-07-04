const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength:60,
            // id: 1,
            // customer_name: 'mukul Bedi sir',
            // invoice_number: 'INV001',
            // due_date: '2023-07-1',
            // total_amount: 1000.00,
            // items: [
            //   {
            //     "name": "Item 1",
            //     "quantity": 2,
            //     "price": 500.00
            //   }
            // ]
        },
        description:{
            type:String,
            required:true,
            maxLength:60,
        },
        createdAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("Api", apiSchema);

