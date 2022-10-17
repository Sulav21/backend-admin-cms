import express from "express";
import { newAdminValidation } from "../middlewares/joi-validation/adminValidation.js";
import { getAdmin, insertAdmin } from "../models/admin/Admin.models.js";

const router = express.Router();

router.get('/', async(req,res,next)=>{
    try {
        const {email} = req.body
        const result = await getAdmin(email)
       if(result._id){
        res.status(200).json({
            status: "success",
            result
          });
        } 
    } catch (error) {
        next(error)
    }
})

router.post("/",newAdminValidation ,async (req, res, next) => {
  try {
    console.log(req.body)
    return
    const result = await insertAdmin(req.body);
    if (result?._id) {
      res.status(200).json({
        status: "success",
        message: "User inserted successfully",
      });
    } else {
      res.json({
        status: "error",
        message: "User insertion failed",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
