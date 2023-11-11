import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateProductUseCase } from '../../../use-cases/product/create-product'

export async function createProductController(
  request: Request,
  reply: Response,
) {
  const imagePath = request.file?.filename
  const createProductBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.coerce.number(),
    category: z.string(),
    ingredients: z.string(),
  })

  const { name, description, category, ingredients, price } =
    createProductBodySchema.parse(request.body)

  const createProductUseCase = new CreateProductUseCase()

  const product = await createProductUseCase.handle({
    name,
    description,
    category,
    ingredients,
    price,
    imagePath,
  })

  return reply.status(201).send(product)
}
