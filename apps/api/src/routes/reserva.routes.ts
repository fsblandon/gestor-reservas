import { Router } from 'express';
import * as reservaCtrl from '../controllers/reserva.controller';

const router = Router();

router.post('/', reservaCtrl.create);
router.get('/', reservaCtrl.list);
router.get('/:id', reservaCtrl.get);
router.put('/:id', reservaCtrl.update);
router.delete('/:id', reservaCtrl.remove);

export default router;
