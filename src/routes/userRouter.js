
import {Router} from "express";
import {signup,login} from "../controllers/userController.js";
import via_cep from "../middleware/via_cep.js";

const router = Router();

router.post("/signup", via_cep, signup);
router.post("/login", login);

export default router;