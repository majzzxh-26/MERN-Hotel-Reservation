import { Reservation } from '../models/Schema.js';
import createError from '../utils/ErrorHandler.js'; // functional error generator

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(createError("Please fill out the entire form.", 400));
  }

  try {
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
      data: reservation,
    });
  } catch (error) {
    next(error); // error middleware will handle it
  }
};
