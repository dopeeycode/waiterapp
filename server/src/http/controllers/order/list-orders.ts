import { Request, Response } from 'express'
import { ListOrdersUseCase } from '../../../use-cases/order/list-orders'

export async function listOrdersController(request: Request, reply: Response) {
  const listOrdersUseCase = new ListOrdersUseCase()
  const products = await listOrdersUseCase.handle()

  reply.json(products)
}
