const express = require("express");
const router = express.Router();
const SubscribersModel = require("../models/subscribers-model");
const subscribersModel = require("../models/subscribers-model");

// Getting All

router.get("/", async (req, res) => {
  try {
    const subscribers = await SubscribersModel.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting One
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber);
});

// Creating One
router.post("/", async (req, res) => {
  const subscriber = new SubscribersModel({
    name: req.body.name,
    subscribedChannelName: req.body.subscribedChannelName
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating One
router.patch("/:id", async (req, res) => {
  try {
    const data = await subscribersModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      subscribedChannelName: req.body.subscribedChannelName
    });
    res.json(`${data.name} is updated `);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting One
router.delete("/:id", async (req, res) => {
  try {
    const data = await SubscribersModel.findByIdAndDelete(req.params.id);
    if (data) {
      res.json({ message: "delete subscriber" });
    } else {
      res.json({ message: "user not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await subscribersModel.findById(req.params.id);
    if (subscriber === null) {
      return res.status(400).json({ message: "subscriber is not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.subscriber = subscriber;
  next();
}

module.exports = router;
