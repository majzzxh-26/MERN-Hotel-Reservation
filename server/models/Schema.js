import mongoose from 'mongoose';
import validator from 'validator';


const rSchema=new mongoose.Schema({
        firstName:{
            type:String,
            required:true,
            minLength:[3,"First Name should be atleast three letters!"],
            maxLength:[30,"Cannot Exceed 30 Letters!"],
        },
        lastName:{
            type:String,
            required:false,
        },
        email:{
            type:String,
            required:true,
            lowerCase:true,
            minLength:10,
            validate:[validator.isEmail,"Provide a Proper Email"],
        },
        phone:{
            type:String,
            required:true,
            lowerCase:true,
            minLength:[10,"Provide a Proper Number"],
            maxLength:[11,"Check the number"],
            
        },
        time:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
});
export const Reservation =mongoose.model("Reservation",rSchema);