import express from "express";
import { validateUser } from "../middlewares/validateUser";
import { userController } from "../controllers/userController";


const router = express.Router();

router.get("/ranking", userController);
router.post("/battle", validateUser, userController);

export default router;