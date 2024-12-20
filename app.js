import Store from "./services/Store.js"
import { getProductById, loadData } from "./services/Menu.js"
import Router from "./services/Router.js"

// Register the web components by just importing them
import { OrderPage } from "./components/OrderPage.js"
import { MenuPage } from "./components/MenuPage.js"
import { DetailsPage } from "./components/DetailsPage.js"
import { ProductItem } from "./components/ProductItem.js"

window.app = {
  store: Store,
  router: Router,
}

window.addEventListener("DOMContentLoaded", async () => {
  loadData()
  app.router.init()
})

window.addEventListener("appcartchange", event => {
  const badge = document.getElementById("badge")
  const quantity = app.store.cart.reduce((acc, item) => acc + item.quantity, 0)
  badge.textContent = quantity
  badge.hidden = quantity == 0
})
