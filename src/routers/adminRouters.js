import express from "express";
import { insertAdmin } from "../models/admin/Admin.models.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
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
