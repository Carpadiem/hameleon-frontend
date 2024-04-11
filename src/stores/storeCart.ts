import ICatalogPlant from "@models/ICatalogPlant"
import { makeAutoObservable } from "mobx"


export interface ICartItem extends ICatalogPlant {
    cartId: number
}

interface ICart {
    items: ICartItem[]
}

class StoreCart {

    constructor() { makeAutoObservable(this) }

    isCartOpened: boolean = false
    setIsCartOpened(state: boolean) { this.isCartOpened = state }

    cart: ICart = { items: [] }
    add(item: ICatalogPlant) { this.cart.items.push({...item, cartId: this.cart.items.length + 1}) }
    remove(cartId: number) { this.cart.items = this.cart.items.filter(item=>item.cartId !== cartId) }
}

export default new StoreCart()