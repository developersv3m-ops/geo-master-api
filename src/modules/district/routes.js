const express = require('express');
const { createDistrictController, getDistrictsController, getDistrictByIdController, updateDistrictController, deleteDistrictController } = require('./controllers');

const router = express.Router();

router.post('/', createDistrictController);
router.get('/', getDistrictsController);
router.get('/:id', getDistrictByIdController);
router.put('/:id', updateDistrictController);
router.delete('/:id', deleteDistrictController);

module.exports = router;
