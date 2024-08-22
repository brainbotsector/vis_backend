const express = require('express');
const Router = express.Router();
const customerModel = require("../models/customer"); // Updated model import

// Endpoint to get all customers
Router.get("/", async (req, res) => {
  try {
    console.log("Fetching all customers...");
    const data = await customerModel.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).send(err);
  }
});

module.exports = Router;
