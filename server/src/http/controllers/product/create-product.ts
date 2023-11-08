import { Request, Response } from 'express'

export async function createProductController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
