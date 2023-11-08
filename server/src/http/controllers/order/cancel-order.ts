import { Request, Response } from 'express'

export async function cancelOrderController(request: Request, reply: Response) {
  reply.send('Ok')
}
