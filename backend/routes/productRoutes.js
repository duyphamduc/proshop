import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controller/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { createProduct } from '../controller/productController.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);



export default router;
