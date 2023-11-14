import { Request, Response } from 'express'
import { z } from 'zod'
import { ChangeOrderStatusUseCase } from './../../../use-cases/order/change-order-status'

export async function changeOrderStatusController(
  request: Request,
  reply: Response,
) {
  const changeOrderStatusParamsSchema = z.object({
    orderId: z.string(),
  })
  const changeOrderStatusBodySchema = z.object({
    status: z.enum(['WAITING', 'IN_PRODUCTION', 'DONE'], {
      required_error: 'Defina o status',
    }),
  })

  const { orderId } = changeOrderStatusParamsSchema.parse(request.params)
  const { status } = changeOrderStatusBodySchema.parse(request.body)

  const changeOrderStatusUseCase = new ChangeOrderStatusUseCase()

  await changeOrderStatusUseCase.handle({
    orderId,
    status,
  })

  return reply.status(204).send({ message: 'Status alterada' })
}
