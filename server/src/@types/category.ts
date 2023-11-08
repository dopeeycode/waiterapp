import { ObjectId } from 'mongoose'

export interface Category {
  name: string
  icon: string
  _id: ObjectId
}
