import { Router } from 'express';
import * as lugarCtrl from '../controllers/lugar.controller';

const router = Router();

router.post('/', lugarCtrl.create);
router.get('/', lugarCtrl.list);
router.get('/:id', lugarCtrl.get);
router.put('/:id', lugarCtrl.update);
router.delete('/:id', lugarCtrl.remove);

export default router;
