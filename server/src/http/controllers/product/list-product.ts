import { Request, Response } from 'express'
import { ListProductsUseCase } from '../../../use-cases/product/list-products'

export async function listProductsController(
  request: Request,
  reply: Response,
) {
  const listProductsUseCase = new ListProductsUseCase()
  const products = await listProductsUseCase.handle()

  reply.json(products)
}
