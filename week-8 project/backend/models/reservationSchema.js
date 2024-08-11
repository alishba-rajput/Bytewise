import mongoose from 'mongoose';
import validator from 'validator';


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must conatain at least 3 character!"],
        maxLenght: [30, "First name cannot exceed 30 character!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must conatain at least 3 character!"],
        maxLenght: [30, "Last name cannot exceed 30 character!"],
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a valid email!"]
    },
    phoneNo: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain only 11 digits!"],
        maxLenght: [11, "Phone number must contain only 11 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);