import { Router } from 'express'
import { uploadMulter } from '../middlewares/upload-multer'
import * as categoryControllers from '../modules/category-controllers'
import * as ordersControllers from '../modules/orders'
import * as productControllers from '../modules/product-controllers'

export const router = Router()
const {
  createProductController,
  getProductsByCategoryController,
  listProductsController,
} = productControllers

const { createCategoryController, listCategoriesController } =
  categoryControllers

const {
  cancelOrderController,
  changeOrderStatusController,
  createOrdersController,
  listOrdersController,
} = ordersControllers

router.get('/categories', listCategoriesController)

router.post('/categories', createCategoryController)

router.get('/categories:categoryID/products', getProductsByCategoryController)

router.get('/products', listProductsController)

router.post(
  '/products',
  uploadMulter.single('imagePath'),
  createProductController,
)

router.get('/orders', listOrdersController)

router.post('/orders', createOrdersController)

router.patch('/orders:orderID', changeOrderStatusController)

router.delete('/orders:orderID', cancelOrderController)
