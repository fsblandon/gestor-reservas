import { Router } from 'express';
import * as espacioCtrl from '../controllers/espacio.controller';

const router = Router();

router.post('/', espacioCtrl.create);
router.get('/', espacioCtrl.list);
router.get('/:id', espacioCtrl.get);
router.put('/:id', espacioCtrl.update);
router.delete('/:id', espacioCtrl.remove);

export default router;
