import { ICartItem } from "@stores/storeCart"

export default interface IOrder {
    id: number
    phone_number: string
    delivery_point: string
    order_from_cart: ICartItem[]
    status: string
}