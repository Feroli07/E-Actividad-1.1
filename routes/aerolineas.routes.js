import express from 'express';
import aerolineaControllers from '../controllers/aerolinea.controller.js';

const router = express.Router();

/* GET users listing. */
router.get("/all", function (req, res, next) {
  const response = aerolineaControllers.listarTodos();
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.get("/one/:id", function (req, res, next) {
  const response = aerolineaControllers.listarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

export default router;

