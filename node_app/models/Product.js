import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    photo: { type: String },
}, { timestamps: true });
export default mongoose.model('Product', productSchema);