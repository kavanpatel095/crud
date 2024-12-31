import Cart from '../models/Cart.js';

export const addToCart = async (req, res) => {
    try {
        const { productId, qty } = req.body;
        const cart = new Cart({ userId: req.user.id, productId, qty });
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.user.id }).populate('productId');
        res.json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
