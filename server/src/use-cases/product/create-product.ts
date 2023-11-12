import { Product } from '../../@types/Product'
import { product } from '../../models/product'

type CreateProductUseCaseRequest = Product

export class CreateProductUseCase {
  async handle({
    name,
    ingredients,
    description,
    category,
    price,
    imagePath,
  }: CreateProductUseCaseRequest) {
    try {
      const productCreated = await product.create({
        name,
        description,
        price: Number(price),
        ingredients: ingredients ? JSON.parse(ingredients) : [],
        category,
        imagePath,
      })

      return productCreated
    } catch (err) {
      console.error('An error occurred while create product', err)
      throw new Error('An error occurred while create product, try again.')
    }
  }
}
