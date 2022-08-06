import { Router } from "express";
import * as loginController from '../controllers/login.controller';
import * as PageController from '../controllers/home.controller';

const router = Router();


// LOGIN
router.get('/login', loginController.login);

// HOME
router.get('/', PageController.home);


export default router;