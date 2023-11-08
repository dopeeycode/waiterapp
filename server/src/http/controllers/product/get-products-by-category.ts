import { Request, Response } from 'express'

export async function getProductsByCategoryController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
