import { Request, Response } from 'express'

export async function changeOrderStatusController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
