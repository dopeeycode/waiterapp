import { Request, Response } from 'express'

export async function listProductController(request: Request, reply: Response) {
  reply.send('Ok')
}
