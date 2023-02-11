import express from "express";

import "../models/User.js";
import User from "../models/User.js";

const router = express.Router();

// main route, /api/users

router.post("/login", async (req, res) => {
    console.log(req.body);

  try {
    
    const result = await User.findOne(req.body);

    if (result) {
      res.send(result);
    }

    else{
        console.log("ERROR IN ELSE")
        res.status(500).json("Error");
    }

  } catch (err) {
      console.log(err)
      res.status(500).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {


    const newUser = await new User(req.body);

    await newUser.save(); 
  
    res.send("User registered successfuly")

  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
});


export default router; 