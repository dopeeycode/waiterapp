import { Request, Response } from 'express'

export async function listCategoriesController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
