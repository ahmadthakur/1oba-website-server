const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hasMortgageOffer: { type: String, required: true },
    purchasePriceRange: { type: String, required: true },
    propertyType: { type: String, required: true },
    bedrooms: { type: String, required: true },
    parking: { type: String, required: true },
    preferredLocation: { type: String, required: true },
    budgetRange: { type: String, required: true },
    moveInDate: { type: String, required: true },
    propertyCondition: { type: String, required: true },
    tenure: { type: String, required: true },
    propertyFeatures: { type: String, required: true },
    additionalRequirements: { type: String, required: true },
    heardAboutUs: { type: String, required: true },
    currentlyRenting: { type: String, required: true },
    workingWithAgent: { type: String, required: true },
    needMortgageAssistance: { type: String, required: true },
    interestedInNewBuild: { type: String, required: true },
    preferencesForSchools: { type: String, required: true },
    considerRenovation: { type: String, required: true },
    openToViewingOutsideArea: { type: String, required: true },
    accessibilityRequirements: { type: String, required: true },
    viewingAvailability: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
