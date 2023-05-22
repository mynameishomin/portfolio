import mongoose, { Schema, models } from "mongoose";

const SheetSchema = new Schema({
    name: String,
    data: [],
    order: [],
});

const Sheet = models?.sheet || mongoose.model("sheet", SheetSchema);

export default Sheet;
