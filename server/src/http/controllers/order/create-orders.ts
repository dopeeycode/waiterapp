import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateOrdersUseCase } from '../../../use-cases/order/create-orders'

export async function createOrderController(request: Request, reply: Response) {
  const createOrderBodySchema = z.object({
    table: z.string(),
    products: z.array(
      z.object({
        product: z.string(),
        quantity: z.number(),
      }),
    ),
  })
  const { table, products } = createOrderBodySchema.parse(request.body)

  const createOrderUseCase = new CreateOrdersUseCase()

  const orders = await createOrderUseCase.handle({
    table,
    products,
  })

  return reply.status(201).json(orders)
}
