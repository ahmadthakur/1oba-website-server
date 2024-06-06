const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProperty = async (req, res) => {
    const property = new Property(req.body);
    try {
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(property);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.json({ message: 'Property deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
