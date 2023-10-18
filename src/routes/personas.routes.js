import { Router } from "express";
import {welcome, listar, buscar, agregar, actualizar, eliminar} from '../controllers/controlador.js'
import { validateSchema } from "../middlewares/validacion.js";
import { addPersonaSchema } from "../schemas/schema.js";

const router = Router();

//Ruta inicial
router.get('/', welcome);

//Consultas
router.get('/listar', listar);
router.get('/buscar/:curp', buscar)

//Agregar registro
router.post('/agregar', validateSchema(addPersonaSchema), agregar);

//Actualizar registro
router.put('/actualizar/:curp', validateSchema(addPersonaSchema), actualizar);

//Eliminar registro
router.delete('/eliminar/:curp', eliminar);

export default router;
