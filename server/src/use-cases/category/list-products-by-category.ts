import { Document } from 'mongoose'
import { product } from '../../models/product'

type ListProductsByCategoryUseCaseResponse = Document

export class ListProductsByCategoryUseCase {
  async handle(
    categoryId: string,
  ): Promise<ListProductsByCategoryUseCaseResponse[]> {
    try {
      const products = await product.find().where('category').equals(categoryId)

      return products
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}
