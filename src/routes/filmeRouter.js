
import { Router } from "express";
import {
  store,
  index,
  show,
  showComplete,
  update,
  destroy,
} from "../controllers/filmeController.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["ADM"]), store);
router.get("/", check_token, index);
router.get("/:id", check_token, show);
router.get("/complete/:id", check_token, showComplete);
router.put("/:id", check_token, check_role("ADM"), update);
router.delete("/:id", check_token, check_role("ADM"), destroy);

export default router;