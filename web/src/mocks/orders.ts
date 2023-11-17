import { Order } from '../@types/Order'

export const orders: Order[] = [
  {
    _id: '6553714ffd32dbb7ea248ef9',
    table: '12',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Coca-Cola',
          imagePath: '1699964328351-coca-cola.png',
          price: 6,
        },
        quantity: 3,
        _id: '6553714ffd32dbb7ea248efa',
      },
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1699661009713-quatro-queijos.png',
          price: 45,
        },
        quantity: 4,
        _id: '654ec4d1079cc953cbcf3272',
      },
    ],
  },
]
