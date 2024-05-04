import ICatalogPlant from "@models/ICatalogPlant"
import { makeAutoObservable } from "mobx"

class StoreAccount {
    constructor() { makeAutoObservable(this) }
    isOrdersOpened: boolean = false
    setIsOrdersOpened(state: boolean) { this.isOrdersOpened = state }
}

export default new StoreAccount()