import express from "express";
import userModel from "../models/user";

const router = new express.Router();
const UserRoute = () => {
  router.get("/countries", async (req, res) => {
    try {
      const countries = await userModel.find();
      res.send({
        code:200,
        msg:"success",
        countries:countries
      })
    } catch (e) {
      console.log(e);
      res.send({
        code: 500,
        msg: "Registration Failed !!!",
      });
    }
  });

  router.get("/country/:id", async (req, res) => {
    try {
      
    } catch (e) {
      console.log(e);
      res.send({
        code: 500,
        msg: "Registration Failed !!!",
      });
    }
  });
  router.post("/country", async (req, res) => {
    try {
      const { name, continent, flag, rank } = req.body; 
      console.log(req.body)
      const saveCountries = new userModel({
        name: name,
        continent: continent,
        flag: flag,
        rank: rank
      });
      const saved = await saveCountries.save();
      if(saved){
        res.send({
          code:200,
          msg:"Country saved successfully"
        })
      }
    } catch (e) {
      console.log(e);
      res.send({
        code: 500,
        msg: "Registration Failed !!!",
      });
    }
  });
  return router;
};
export default UserRoute;
