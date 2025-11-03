import { Router } from "express";
import lugarRouters from "./lugar.routes";
import espacioRouters from "./espacio.routes";
import reserveRouters from "./reserva.routes";

const router = Router();

router.use('/lugares', lugarRouters);
router.use('/espacios', espacioRouters);
router.use('/reservas', reserveRouters);

export default router;