import { Router } from 'express'
import { uploadMulter } from '../middlewares/upload-multer'
import * as categoryControllers from '../modules/category-controllers'
import * as ordersControllers from '../modules/orders'
import * as productControllers from '../modules/product-controllers'

export const router = Router()
const {
  createProductController,
  listProductsByCategoryController,
  listProductsController,
} = productControllers

const { createCategoryController, listCategoriesController } =
  categoryControllers

const {
  cancelOrderController,
  changeOrderStatusController,
  createOrderController,
  listOrdersController,
} = ordersControllers

router.get('/categories', listCategoriesController)

router.post('/categories', createCategoryController)

router.get('/categories/:categoryId/products', listProductsByCategoryController)

router.get('/products', listProductsController)

router.post(
  '/products',
  uploadMulter.single('imagePath'),
  createProductController,
)

router.get('/orders', listOrdersController)

router.post('/orders', createOrderController)

router.patch('/orders/:orderId', changeOrderStatusController)

router.delete('/orders/:orderId', cancelOrderController)
