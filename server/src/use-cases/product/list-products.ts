import { Document } from 'mongoose'
import { product } from '../../models/product'

type ListProductsUseCaseResponse = Document

export class ListProductsUseCase {
  async handle(): Promise<ListProductsUseCaseResponse[]> {
    try {
      const products = await product.find()

      return products
    } catch (err) {
      console.error('An error occurred while listing products', err)
      throw new Error('An error occurred while listing products, try again.')
    }
  }
}
