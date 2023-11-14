import { Request, Response } from 'express'
import { z } from 'zod'
import { ListProductsByCategoryUseCase } from './../../../use-cases/category/list-products-by-category'

export async function listProductsByCategoryController(
  request: Request,
  reply: Response,
) {
  const listProductsByCategoryParamschema = z.object({
    categoryId: z.string(),
  })
  const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase()
  const { categoryId } = listProductsByCategoryParamschema.parse(request.params)

  if (!categoryId) {
    return reply.status(500).send({ message: 'category id field is not valid' })
  }

  const products = await listProductsByCategoryUseCase.handle(categoryId)

  return reply.send({
    products,
  })
}
