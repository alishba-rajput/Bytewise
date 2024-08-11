import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async(req,res,next) =>{
    const {firstName, lastName, email, phoneNo, time, date} = req.body;
    if(!firstName || !lastName || !email || !phoneNo || !time || !date){
        return next(new ErrorHandler("Please fill complete reservation form!", 400));
    }
    try{
        await Reservation.create({firstName, lastName, email, phoneNo, time, date});
        res.status(200).
        json({
            success: true,
            message: "Reservation sent successfully!",
        });

    }catch (error){
        if(error.name == "ValidationError"){
            const ValidationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(ValidationErrors.join(" , "), 400));
        }
        return (error);

    }
};