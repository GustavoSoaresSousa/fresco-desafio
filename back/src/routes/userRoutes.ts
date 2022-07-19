import { userController } from "../controllers/UserController";
import { Router } from "express";

const routesUsuarios = Router();

routesUsuarios.post('/register', userController.store)
routesUsuarios.post('/login', userController.login)
routesUsuarios.get('/', userController.index)

export { routesUsuarios }