import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateCategoryUseCase } from '../../../use-cases/category/create-category'

export async function createCategoryController(
  request: Request,
  reply: Response,
) {
  const createCategoryBodySchema = z.object({
    name: z.string(),
    icon: z.string(),
  })
  const { name, icon } = createCategoryBodySchema.parse(request.body)

  const createCategoryUseCase = new CreateCategoryUseCase()

  const category = await createCategoryUseCase.handle({
    name,
    icon,
  })

  return reply.status(201).json(category)
}
