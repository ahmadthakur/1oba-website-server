const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const {
    fName,
    lName,
    address,
    phoneNumber,
    email,
    hasMortgageOffer,
    purchasePriceRange,
    propertyType,
    bedrooms,
    parking,
    preferredLocation,
    budgetRange,
    moveInDate,
    propertyCondition,
    tenure,
    propertyFeatures,
    additionalRequirements,
    heardAboutUs,
    currentlyRenting,
    workingWithAgent,
    needMortgageAssistance,
    interestedInNewBuild,
    preferencesForSchools,
    considerRenovation,
    openToViewingOutsideArea,
    accessibilityRequirements,
    viewingAvailability,
    password,
  } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      fName,
      lName,
      address,
      phoneNumber,
      email,
      hasMortgageOffer,
      purchasePriceRange,
      propertyType,
      bedrooms,
      parking,
      preferredLocation,
      budgetRange,
      moveInDate,
      propertyCondition,
      tenure,
      propertyFeatures,
      additionalRequirements,
      heardAboutUs,
      currentlyRenting,
      workingWithAgent,
      needMortgageAssistance,
      interestedInNewBuild,
      preferencesForSchools,
      considerRenovation,
      openToViewingOutsideArea,
      accessibilityRequirements,
      viewingAvailability,
      password: bcrypt.hashSync(password, 10),
    });
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
