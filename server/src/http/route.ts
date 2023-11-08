import { Router } from 'express'
import { createCategoryController } from './controllers/category/create-category'
import { listCategoriesController } from './controllers/category/list-categories'
import { cancelOrderController } from './controllers/order/cancel-order'
import { changeOrderStatusController } from './controllers/order/change-order-status'
import { createOrdersController } from './controllers/order/create-orders'
import { listOrdersController } from './controllers/order/list-orders'
import { createProductController } from './controllers/product/create-product'
import { getProductsByCategoryController } from './controllers/product/get-products-by-category'
import { listProductController } from './controllers/product/list-product'

export const router = Router()

router.get('/categories', listCategoriesController)

router.post('/categories', createCategoryController)

router.get('/products', listProductController)

router.post('/products', createProductController)

router.get('/categories:categoryID/products', getProductsByCategoryController)

router.get('/orders', listOrdersController)

router.post('/orders', createOrdersController)

router.patch('/orders:orderID', changeOrderStatusController)

router.delete('/orders:orderID', cancelOrderController)
