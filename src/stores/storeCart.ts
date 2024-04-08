import ICatalogPlant from "@models/ICatalogPlant"
import { makeAutoObservable } from "mobx"

interface ICart {
    items: ICatalogPlant[]
}

class StoreCart {

    constructor() { makeAutoObservable(this) }

    isCartOpened: boolean = false
    setIsCartOpened(state: boolean) { this.isCartOpened = state }

    cart: ICart = { items: [] }
    add(item: ICatalogPlant) { this.cart.items.push(item) }
    remove(itemId: number) { this.cart.items = this.cart.items.filter(item=>item.id !== itemId) }
}

export default new StoreCart()