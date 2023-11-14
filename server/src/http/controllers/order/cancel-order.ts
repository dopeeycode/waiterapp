import { Request, Response } from 'express'
import { z } from 'zod'
import { CancelOrderUseCase } from '../../../use-cases/order/cancel-order'

export async function cancelOrderController(request: Request, reply: Response) {
  const changeOrderStatusParamsSchema = z.object({
    orderId: z.string({
      required_error: 'Defina o id da order',
    }),
  })
  const { orderId } = changeOrderStatusParamsSchema.parse(request.params)

  const cancelOrderUseCase = new CancelOrderUseCase()
  await cancelOrderUseCase.handle(orderId)

  return reply.send({ message: 'Order Deleted ✔' })
}
