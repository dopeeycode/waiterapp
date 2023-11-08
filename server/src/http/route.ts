import { Router } from 'express'
import { cancelOrderController } from './controllers/cancel-order'
import { changeOrderStatusController } from './controllers/change-order-status'
import { createCategoryController } from './controllers/create-category'
import { createOrdersController } from './controllers/create-orders'
import { createProductController } from './controllers/create-product'
import { getProductsByCategoryController } from './controllers/get-products-by-category'
import { listCategoriesController } from './controllers/list-categories'
import { listOrdersController } from './controllers/list-orders'
import { listProductController } from './controllers/list-product'

export const router = Router()

// List categories
router.get('/categories', listCategoriesController)

// Create category
router.post('/categories', createCategoryController)

// List products
router.get('/products', listProductController)

// Create product
router.post('/products', createProductController)

// Get products by category
router.get('/categories:categoryID/products', getProductsByCategoryController)

// List orders
router.get('/orders', listOrdersController)

// Create orderss
router.post('/orders', createOrdersController)

// Change order status
router.patch('/orders:orderID', changeOrderStatusController)

// Delete/cancel order
router.delete('/orders:orderID', cancelOrderController)
