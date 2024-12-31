import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNum: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profilePhoto: { type: String },
    password: { type: String, required: true },
    address: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);