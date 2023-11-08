import { Request, Response } from 'express'

export async function createOrdersController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
