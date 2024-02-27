import { Schema, model } from "mongoose";
const productSchema = new Schema({
    barcode:{
        type:String,
        unique:true,
        required:true
    },
    description:String,
    price:Number,
    stock:Number,
    expiredDate:String,
    status:Number
},{
    versionKey:false,
    timestamps:true
})

export default model('product', productSchema)