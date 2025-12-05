import {upload} from '../middlewares/multer.middlerware.js';
import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import { loggoutUser,
    loginUser,
    registerUser,
    changeCurrentPassword} from "../controllers/user.controllers.js";

const router = Router();
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1,
        },
    ]),
    registerUser)

router.route("/login").post(loginUser);
//secured rouths
router.route("/logout").post(verifyJWT,loggoutUser);
router.route("/changePassword").post(verifyJWT,changeCurrentPassword);

export default router;