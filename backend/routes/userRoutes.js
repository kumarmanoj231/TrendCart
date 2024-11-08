import express from "express";
const router = express.Router()
import {createUser} from '../controllers/userControlller.js'

router.route("/").post(createUser);


export default router;