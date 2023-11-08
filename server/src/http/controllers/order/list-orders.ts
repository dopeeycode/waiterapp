import { Request, Response } from 'express'

export async function listOrdersController(request: Request, reply: Response) {
  reply.send('Ok')
}
