const {Router} = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getBarang)
router.get('/:id', controller.getBarangbyID)
router.post('/', controller.addBarang)

module.exports = router;