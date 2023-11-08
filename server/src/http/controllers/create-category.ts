import { Request, Response } from 'express'

export async function createCategoryController(
  request: Request,
  reply: Response,
) {
  reply.send('Ok')
}
