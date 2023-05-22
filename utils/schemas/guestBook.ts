import mongoose, { Schema, models } from "mongoose";

const GuestBookSchema = new Schema({
    name: String,
    comment: String,
    date: Date,
});

const GuestBook =
    models?.guestBook || mongoose.model("guestBook", GuestBookSchema);

export default GuestBook;
